import AccountService from './AccountService';
import Display from './Display';
import DateProvider from './DateProvider';

interface Transaction {
  date: string;
  amount: number;
  balance: number;
}

export default class Account implements AccountService {
  private readonly display: Display;
  private readonly dateProvider: DateProvider;
  private transactions: Transaction[] = [];
  private balance: number = 0;

  constructor(display: Display, dateProvider: DateProvider) {
    this.display = display;
    this.dateProvider = dateProvider;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.addTransaction(amount);
  }

  withdraw(amount: number): void {
    this.balance -= amount;
    this.addTransaction(-amount);
  }

  printStatement(): void {
    this.display.print('Date || Amount || Balance');
    [...this.transactions]
      .reverse()
      .forEach(t => {
        this.display.print(`${t.date} || ${t.amount} || ${t.balance}`);
      });
  }

  private addTransaction(amount: number): void {
    const transaction: Transaction = {
      date: this.formatDate(this.dateProvider.now()),
      amount: amount,
      balance: this.balance
    };
    this.transactions.push(transaction);
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
