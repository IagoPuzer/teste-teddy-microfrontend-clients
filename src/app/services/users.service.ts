import { Injectable } from '@angular/core';
import { responseClients } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseApiUrl: string = 'https://boasorte.teddybackoffice.com.br';

  constructor() {}

  async getUsers(page: number, limit: number = 10): Promise<responseClients> {
    return await fetch(`${this.baseApiUrl}/users?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        throw error;
      });
  }

  async deleteUser(id: number): Promise<void> {
    return await fetch(`${this.baseApiUrl}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        throw error;
      });
  }
}
