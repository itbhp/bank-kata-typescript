import InMemoryDisplay from '../source/infrastructure/InMemoryDisplay';
import { displayContractFor } from './DisplayContractFor';

describe('InMemoryDisplay', () => {

  it('no printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const contract = displayContractFor(display);
    contract.ensureNoPrintedLines(printedLines);
  });

  it('one printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const contract = displayContractFor(display);
    contract.verifyOnePrintedLine(printedLines);
  });

  it('multiple printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new InMemoryDisplay(printedLines);
    const contract = displayContractFor(display);
    contract.verifyMultiplePrintedLines(printedLines);
  });
});
