import AccountService from './AccountService';
import Display from './Display';
import DateProvider from './DateProvider';

export default class Account implements AccountService {
  private readonly display: Display;
  private readonly dateProvider: DateProvider;
  private transactions: { date: string; amount: number; balance: number }[] = [];
  private balance: number = 0;

  constructor(display: Display, dateProvider: DateProvider) {
    this.display = display;
    this.dateProvider = dateProvider;
  }

  deposit(amount: number): void {
    this.balance += amount;
    const date = this.formatDate(this.dateProvider.now());
    this.transactions.push({ date, amount, balance: this.balance });
  }

  printStatement(): void {
    this.display.print('Date || Amount || Balance');
    // Print in reverse order
    [...this.transactions].reverse().forEach(t => {
      this.display.print(`${t.date} || ${t.amount} || ${t.balance}`);
    });
  }

  withdraw(amount: number): void {
    this.balance -= amount;
    const date = this.formatDate(this.dateProvider.now());
    this.transactions.push({ date, amount: -amount, balance: this.balance });
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
