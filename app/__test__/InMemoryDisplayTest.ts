import InMemoryDisplay from '../source/infrastructure/InMemoryDisplay';
import { displayContractFor } from './DisplayContractFor';

describe('InMemoryDisplay', () => {

  it('will not print lines if not invoked', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const contract = displayContractFor(display);
    contract.ensureNoPrintedLines(printedLines);
  });

  it('will print one line', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const contract = displayContractFor(display);
    contract.verifyOnePrintedLine(printedLines);
  });

  it('will print multiple lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const contract = displayContractFor(display);
    contract.verifyMultiplePrintedLines(printedLines);
  });
});
