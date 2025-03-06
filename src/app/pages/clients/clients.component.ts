import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { CardComponent } from '../../components/card/card.component';
import { UsersService } from '../../services/users.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ModalComponent, CardComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients: Client[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  isModalVisible: boolean = false;
  selectedClient: Client | null = null;

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    try {
      const response = await this.usersService.getUsers();
      this.clients = response.clients;
      this.currentPage = response.currentPage;
      this.totalPages = response.totalPages;
    } catch (error) {
      console.error('Error fetching users in component:', error);
    }
  }

  openModal(client: Client) {
    this.selectedClient = client;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedClient = null;
  }

  deleteClient() {
    if (this.selectedClient) {
      // Lógica para deletar o cliente
      this.clients = this.clients.filter(
        (client) => client !== this.selectedClient
      );
      this.closeModal();
    }
  }
}
