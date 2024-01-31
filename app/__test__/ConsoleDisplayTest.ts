import ConsoleDisplay from '../source/infrastructure/ConsoleDisplay';
import {displayContractFor} from './DisplayContractFor';

describe('ConsoleDisplay', () => {
    const consoleLog = console.log;

    afterEach(() => {
        console.log = consoleLog;
    });

    it('no printed lines', () => {
        const printedLines: Array<string> = [];
        const display = new ConsoleDisplay(stubConsoleLog(printedLines));
        const contract = displayContractFor(display);
        contract.ensureNoPrintedLines(printedLines);
    });

    it('one printed lines', () => {
        const printedLines: Array<string> = [];
        const display = new ConsoleDisplay(stubConsoleLog(printedLines));
        const contract = displayContractFor(display);
        contract.verifyOnePrintedLine(printedLines);
    });

    it('multiple printed lines', () => {
        const printedLines: Array<string> = [];
        const display = new ConsoleDisplay(stubConsoleLog(printedLines));
        const contract = displayContractFor(display);
        contract.verifyMultiplePrintedLines(printedLines);
    });

    function stubConsoleLog(printedLines: Array<string>): Console {
        console.log = (statement: string) => printedLines.push(statement);
        return console;
    }
});
