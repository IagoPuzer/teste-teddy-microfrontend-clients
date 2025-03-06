export interface Client {
  id: number;
  name: string;
  companyValuation: number;
  salary: number;
  createdAt: string;
  updatedAt: string;
}

export interface responseClients {
  clients: Client[];
  currentPage: number;
  totalPages: number;
}
