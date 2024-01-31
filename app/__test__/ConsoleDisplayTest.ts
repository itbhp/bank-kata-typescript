import ConsoleDisplay from '../source/infrastructure/ConsoleDisplay';
import {displayContractFor} from './DisplayContractFor';

describe('ConsoleDisplay', () => {
    const consoleLog = console.log;

    afterEach(() => {
        console.log = consoleLog;
    });

    it('will not print lines if not invoked', () => {
        const printedLines: Array<string> = [];
        const display = new ConsoleDisplay(spyAndFakeConsoleLog(printedLines));
        const contract = displayContractFor(display);
        contract.ensureNoPrintedLines(printedLines);
    });

    it('will print one line', () => {
        const printedLines: Array<string> = [];
        const display = new ConsoleDisplay(spyAndFakeConsoleLog(printedLines));
        const contract = displayContractFor(display);
        contract.verifyOnePrintedLine(printedLines);
    });

    it('will print multiple lines', () => {
        const printedLines: Array<string> = [];
        const display = new ConsoleDisplay(spyAndFakeConsoleLog(printedLines));
        const contract = displayContractFor(display);
        contract.verifyMultiplePrintedLines(printedLines);
    });

    function spyAndFakeConsoleLog(printedLines: Array<string>): Console {
        console.log = (statement: string) => printedLines.push(statement);
        return console;
    }
});
