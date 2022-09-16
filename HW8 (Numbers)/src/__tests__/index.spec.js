import {
  getFixedValue,
  getFlooroCeil,
  getSquareOfCircle,
  minMaxMultiply,
  randomizer,
} from '../index';

describe('minMaxMultiply()', () => {
  it('should return correct value', () => {
    expect(minMaxMultiply(2, 3, 4, 5)).toStrictEqual(10);
  });
});

describe('getSquareOfCircle()', () => {
  it('should return correct value', () => {
    expect(getSquareOfCircle(3)).toStrictEqual(28.274333882308138);
    expect(getSquareOfCircle(4)).toStrictEqual(50.26548245743669);
    expect(getSquareOfCircle(5)).toStrictEqual(78.53981633974483);
  });
});

describe('getFixedValue()', () => {
  it('should return correct value', () => {
    expect(getFixedValue(40.235233, 4)).toStrictEqual(40.2352);
    expect(getFixedValue(40.235233, 2)).toStrictEqual(40.24);
    expect(getFixedValue(40.235233, 0)).toStrictEqual(40);
  });
});

describe('getFlooroCeil()', () => {
  it('should return correct value', () => {
    expect(getFlooroCeil(3.235)).toStrictEqual(4);
    expect(getFlooroCeil(4.235)).toStrictEqual(4);
  });
});

describe('randomizer()', () => {
  const set = new Set();
  const from = 3;
  const to = 19;
  new Array(30000).fill('').forEach(() => {
    const randomNumber = randomizer(from, to);
    set.add(randomNumber);
    describe(`with ${randomNumber} at ${Math.random()}`, () => {
      it('should return value with right range', () => {
        expect(randomNumber >= from && randomNumber <= to).toStrictEqual(true);
      });
    });
  });

  it('set had length 17', () => {
    expect(set.size).toStrictEqual(17);
  });
});
