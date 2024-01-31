import InMemoryDisplay from '../source/infrastructure/InMemoryDisplay';
import { displayContract } from './DisplayContract';

describe('InMemoryDisplay', () => {
  it('no printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);

    displayContract.noPrintedLines(display, printedLines);
  });

  it('one printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);

    displayContract.onePrintedLine(display, printedLines);
  });

  it('multiple printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);

    displayContract.multiplePrintedLines(display, printedLines);
  });
});
