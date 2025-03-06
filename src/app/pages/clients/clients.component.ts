import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { CardComponent } from '../../components/card/card.component';
import { UsersService } from '../../services/users.service';
import { Client, responseClients } from '../../models/client.model';
import { ClientFormComponent } from '../../components/client-form/client-form.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ModalComponent, CardComponent, ClientFormComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  @ViewChild(ClientFormComponent) clientFormComponent!: ClientFormComponent;

  clients: Client[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  isDeleteModalVisible: boolean = false;
  isCreateModalVisible: boolean = false;
  isUpdateModalVisible: boolean = false;
  selectedClient: Client | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    from(this.usersService.getUsers(this.currentPage)).subscribe({
      next: (response: responseClients) => {
        this.clients = response.clients;
        this.currentPage = response.currentPage;
        this.totalPages = response.totalPages;
      },
      error: (error) => {
        console.error('Error fetching users in component:', error);
      },
    });
  }

  openDeleteClientModal(client: Client) {
    this.selectedClient = client;
    this.isDeleteModalVisible = true;
  }

  openCreateClientModal() {
    this.isCreateModalVisible = true;
  }

  openUpdateClientModal(client: Client) {
    this.selectedClient = client;
    this.isUpdateModalVisible = true;
  }

  closeModal() {
    this.isDeleteModalVisible = false;
    this.isCreateModalVisible = false;
    this.isUpdateModalVisible = false;
    this.selectedClient = null;
    this.clientFormComponent.clientForm.reset();
  }

  handleDeleteClient() {
    if (this.selectedClient) {
      from(this.usersService.deleteUser(this.selectedClient.id)).subscribe({
        next: () => {
          this.clients = this.clients.filter(
            (client) => client !== this.selectedClient
          );
          this.closeModal();
        },
        error: (error) => {
          console.error('Error deleting user in component:', error);
        },
      });
    }
  }

  handleCreateClient(clientData: {
    name: string;
    salary: string;
    companyValuation: string;
  }) {
    from(
      this.usersService.createUser(
        clientData.name,
        parseFloat(clientData.salary),
        parseFloat(clientData.companyValuation)
      )
    ).subscribe({
      next: () => {
        this.isCreateModalVisible = false;
        this.clientFormComponent.clientForm.reset();
        this.loadClients();
      },
      error: (error) => {
        console.error('Error creating user in component:', error);
      },
    });
  }

  handleUpdateClient(clientData: {
    id: number;
    name: string;
    salary: string;
    companyValuation: string;
  }) {
    from(
      this.usersService.updateUser(
        clientData.id,
        clientData.name,
        parseFloat(clientData.salary),
        parseFloat(clientData.companyValuation)
      )
    ).subscribe({
      next: () => {
        this.isUpdateModalVisible = false;
        this.clientFormComponent.clientForm.reset();
        this.loadClients();
      },
      error: (error) => {
        console.error('Error updating user in component:', error);
      },
    });
  }
}
