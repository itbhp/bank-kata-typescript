import AccountService from './AccountService';
import Display from './Display';

export default class Account implements AccountService {
  private readonly display: Display;

  constructor(display: Display) {
    this.display = display;
  }

  deposit(amount: number): void {
    throw new Error('Method not implemented');
  }

  printStatement(): void {
    throw new Error('Method not implemented');
  }

  withdraw(amount: number): void {
    throw new Error('Method not implemented');
  }
}
