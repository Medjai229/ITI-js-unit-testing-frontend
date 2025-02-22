import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (class only) testing:', () => {
  it('expect to return 16 when passing 4', () => {
    expect(new SquarePipeForLab().transform(4)).toBe(16);
  });
  it("expect to return 9 when passing '3'", () => {
    expect(new SquarePipeForLab().transform('3')).toBe(9);
  });
  it("expect to return 'Not a number' when passing wrong parameter", () => {
    expect(new SquarePipeForLab().transform('nan')).toBe('not a number');
  });
});
