import Account from '../source/domain/Account';
import InMemoryDisplay from '../source/infrastructure/InMemoryDisplay';

describe('AcceptanceTest', () => {
  it('simple use case', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const account = new Account(display);

    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    account.printStatement();

    expect(printedLines).toEqual([
      `Date || Amount || Balance`,
      `14/01/2012 || -500 || 2500`,
      `13/01/2012 || 2000 || 3000`,
      `10/01/2012 || 1000 || 1000`,
    ]);
  });
});
