import Display from '../domain/Display';

export default class InMemoryDisplay implements Display {
  protected readonly buffer: Array<string>;

  constructor(buffer: Array<string>) {
    this.buffer = buffer;
  }

  print(statement: string): void {
    this.buffer.push(statement);
  }
}
