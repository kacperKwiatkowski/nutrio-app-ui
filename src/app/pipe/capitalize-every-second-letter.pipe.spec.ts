import { CapitalizeEverySecondLetterPipe } from './capitalize-every-second-letter.pipe';

describe('CapitalizeEverySecondLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeEverySecondLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
