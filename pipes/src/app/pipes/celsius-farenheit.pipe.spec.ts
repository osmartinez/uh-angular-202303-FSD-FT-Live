import { CelsiusFarenheitPipe } from './celsius-farenheit.pipe';

describe('CelsiusFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new CelsiusFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
