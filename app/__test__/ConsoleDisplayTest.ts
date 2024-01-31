import ConsoleDisplay from '../source/infrastructure/ConsoleDisplay';
import { displayContract } from './DisplayContract';

describe('ConsoleDisplay', () => {
  const consoleLog = console.log;

  afterEach(() => {
    console.log = consoleLog;
  });

  it('no printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new ConsoleDisplay(stubConsoleLog(printedLines));

    displayContract.noPrintedLines(display, printedLines);
  });

  it('one printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new ConsoleDisplay(stubConsoleLog(printedLines));

    displayContract.onePrintedLine(display, printedLines);
  });

  it('multiple printed lines', () => {
    const printedLines: Array<string> = [];
    const display = new ConsoleDisplay(stubConsoleLog(printedLines));

    displayContract.multiplePrintedLines(display, printedLines);
  });

  function stubConsoleLog(printedLines: Array<string>): Console {
    console.log = (statement: string) => printedLines.push(statement);
    return console;
  }
});
