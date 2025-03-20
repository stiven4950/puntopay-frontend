import { Ticket } from "./ticket.model";

export interface Transaction {
  transactionId: number;
  date: string;
  ticket: Ticket;
  message: string;
  authorizationCode: string;
  trace: string;
}
