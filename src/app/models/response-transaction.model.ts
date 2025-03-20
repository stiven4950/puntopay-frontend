import { Transaction } from "./transaction.model";

export interface ResponseTransaction {
  state: boolean;
  message: string;
  code: string;
  data: Transaction;
}
