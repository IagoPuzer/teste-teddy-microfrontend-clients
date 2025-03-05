import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() client!: Client;
}
