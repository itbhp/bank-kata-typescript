import Display from '../domain/Display';

export default class ConsoleDisplay implements Display {
  private console: Console;

  constructor(console: Console) {
    this.console = console;
  }

  print(statement: string): void {
    this.console.log(statement);
  }
}
