import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
  imports: [ReactiveFormsModule],
})
export class ClientFormComponent implements OnChanges {
  @Input() client: Client | null = null;
  @Output() createClient = new EventEmitter<{
    name: string;
    salary: string;
    companyValuation: string;
  }>();
  @Output() updateClient = new EventEmitter<{
    id: number;
    name: string;
    salary: string;
    companyValuation: string;
  }>();

  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      companyValuation: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['client'] && this.client) {
      this.clientForm.patchValue({
        name: this.client.name,
        salary: this.client.salary,
        companyValuation: this.client.companyValuation,
      });
    }
  }

  onSubmit() {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    if (this.client) {
      this.updateClient.emit({
        id: this.client.id,
        ...this.clientForm.value,
      });
    } else {
      this.createClient.emit(this.clientForm.value);
    }
  }
}
