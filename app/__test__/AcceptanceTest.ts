import Account from '../source/domain/Account';
import InMemoryDisplay from '../source/infrastructure/InMemoryDisplay';
import DateProvider from '../source/domain/DateProvider';

describe('AcceptanceTest', () => {
  it('simple use case', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const fixedDates = [
      new Date(2012, 0, 10), // 10/01/2012
      new Date(2012, 0, 13), // 13/01/2012
      new Date(2012, 0, 14), // 14/01/2012
    ];
    let dateIndex = 0;
    const dateProvider: DateProvider = {
      now: () => fixedDates[dateIndex++]
    };
    const account = new Account(display, dateProvider);

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
