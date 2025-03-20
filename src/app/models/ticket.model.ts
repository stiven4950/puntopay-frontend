import { TicketDetail } from "./ticket-detail.model";

export interface Ticket {
  header: string;
  title: string;
  body: TicketDetail;
  footer: string;
  logo: string;
}
