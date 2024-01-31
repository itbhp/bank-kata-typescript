import Display from '../source/domain/Display';

export const displayContractFor = (display: Display) => {
    return {
        ensureNoPrintedLines: (printedLines: Array<string>) => {
            expect(printedLines).toEqual([]);
        },

        verifyOnePrintedLine: (printedLines: Array<string>) => {
            display.print('Ciccio');
            expect(printedLines).toEqual(['Ciccio']);
        },

        verifyMultiplePrintedLines: (printedLines: Array<string>) => {
            display.print('Ciccio');
            display.print('Pasticcio');
            display.print('...');

            expect(printedLines).toEqual(['Ciccio', 'Pasticcio', '...']);
        }
    }
};
