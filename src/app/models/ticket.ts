export interface Ticket {
  id?: number;
  subject: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
