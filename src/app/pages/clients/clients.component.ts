import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { UsersService } from '../../services/users.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-clients',
  imports: [CardComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  currentPage: number = 0;
  totalPages: number = 0;

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
}
