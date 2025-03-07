import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsStateService {
  private clients: Client[] = [];

  constructor() {
    const savedClients = localStorage.getItem('clients');
    if (savedClients) {
      this.clients = JSON.parse(savedClients);
    }
  }

  saveClient(client: Client) {
    if (!this.clients.some((clientItem) => clientItem.id === client.id)) {
      this.clients.push(client);
      this.updateLocalStorage();
    }
  }

  getClients() {
    return this.clients;
  }

  removeClient(client: Client) {
    this.clients = this.clients.filter(
      (clientItem) => clientItem.id !== client.id
    );
    this.updateLocalStorage();
  }

  clearClients() {
    this.clients = [];
    localStorage.removeItem('clients');
  }

  isClientSaved(client: Client): boolean {
    return this.clients.some((clientItem) => clientItem.id === client.id);
  }

  private updateLocalStorage() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }
}
