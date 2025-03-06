import { Injectable } from '@angular/core';
import { Client, responseClients } from '../models/client.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseApiUrl: string = 'https://boasorte.teddybackoffice.com.br';

  constructor() {}

  getUsers(page: number, limit: number = 10): Observable<responseClients> {
    return from(
      fetch(`${this.baseApiUrl}/users?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return from(
      fetch(`${this.baseApiUrl}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
    );
  }

  createUser(
    name: string,
    salary: number,
    companyValuation: number
  ): Observable<Client> {
    return from(
      fetch(`${this.baseApiUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, salary, companyValuation }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    );
  }

  updateUser(
    id: number,
    name: string,
    salary: number,
    companyValuation: number
  ): Observable<Client> {
    return from(
      fetch(`${this.baseApiUrl}/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, salary, companyValuation }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    );
  }
}
