import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { SelectedClientsComponent } from './pages/selected-clients/selected-clients.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
  {
    path: 'selectedclients',
    component: SelectedClientsComponent,
  },
];
