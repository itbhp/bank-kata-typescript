import Display from '../source/domain/Display';

export const displayContract = {
  noPrintedLines(display: Display, printedLines: Array<string>): void {
    expect(printedLines).toEqual([]);
  },

  onePrintedLine(display: Display, printedLines: Array<string>): void {
    display.print('Ciccio');

    expect(printedLines).toEqual(['Ciccio']);
  },

  multiplePrintedLines(display: Display, printedLines: Array<string>): void {
    display.print('Ciccio');
    display.print('Pasticcio');
    display.print('...');

    expect(printedLines).toEqual(['Ciccio', 'Pasticcio', '...']);
  },
};
