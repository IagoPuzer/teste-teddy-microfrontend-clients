import { Component, OnInit } from '@angular/core';
import { ClientsStateService } from '../../states/clients-state.service';
import { Client } from '../../models/client.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-selected-clients',
  templateUrl: './selected-clients.component.html',
  styleUrls: ['./selected-clients.component.css'],
  imports: [CardComponent],
})
export class SelectedClientsComponent implements OnInit {
  selectedClients: Client[] = [];

  constructor(private clientsStateService: ClientsStateService) {}

  ngOnInit() {
    this.selectedClients = this.clientsStateService.getClients();
  }

  clearSelectedClients() {
    this.clientsStateService.clearClients();
    this.selectedClients = [];
  }

  removeClient(client: Client) {
    this.clientsStateService.removeClient(client);
    this.selectedClients = this.selectedClients.filter(
      (c) => c.id !== client.id
    );
  }
}
