import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { CardComponent } from '../../components/card/card.component';
import { UsersService } from '../../services/users.service';
import { Client, responseClients } from '../../models/client.model';
import { ClientFormComponent } from '../../components/client-form/client-form.component';
import { from } from 'rxjs';
import { ClientsStateService } from '../../states/clients-state.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    CardComponent,
    ClientFormComponent,
    PaginationComponent,
  ],
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

  constructor(
    private usersService: UsersService,
    private clientsStateService: ClientsStateService,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients(page: number = this.currentPage) {
    from(this.usersService.getUsers(page)).subscribe({
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
          this.toast.success('Cliente deletado com sucesso!');
        },
        error: (error) => {
          this.toast.error('Erro ao deletar cliente!');
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
        this.toast.success('Cliente criado com sucesso!');
      },
      error: (error) => {
        this.toast.error('Erro ao criar cliente!');
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
        this.toast.success('Cliente atualizado com sucesso!');
      },
      error: (error) => {
        this.toast.error('Erro ao atualizar cliente!');
        console.error('Error updating user in component:', error);
      },
    });
  }

  saveClientToState(client: Client) {
    this.clientsStateService.saveClient(client);
    this.toast.success('Cliente salvo com sucesso!');
  }
}
