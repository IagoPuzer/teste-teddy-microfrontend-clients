export interface Client {
  id: number;
  name: string;
  companyValuation: number;
  salary: number;
}

export interface responseClients {
  clients: Client[];
  currentPage: number;
  totalPages: number;
}
