import Display from '../domain/Display';

export default class InMemoryDisplay implements Display {
  private readonly buffer: Array<string>;

  constructor(buffer: Array<string>) {
    this.buffer = buffer;
  }

  print(statement: string): void {
    this.buffer.push(statement);
  }
}
