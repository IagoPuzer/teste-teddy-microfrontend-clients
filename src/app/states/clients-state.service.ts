import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsStateService {
  private clients: any[] = [];

  saveClient(client: any) {
    this.clients.push(client);
  }

  getClients() {
    return this.clients;
  }
}
