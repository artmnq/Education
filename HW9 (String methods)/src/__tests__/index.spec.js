import {
  replaceZAndVFromString,
  changeWord,
  truncate,
  quantityOfSymbols,
  quantityOfSymbolsWithIndexOf,
} from '../index';

describe('Strings methods', () => {
  describe('replaceZAndVFromString()', () => {
    it('returns correct string', () => {
      expect(replaceZAndVFromString('I love pizza')).toStrictEqual(
        'I lo*e pi**a'
      );
    });
  });

  describe('changeWord()', () => {
    it('returns correct string', () => {
      expect(changeWord('Hi Bohdan', 'Bohdan', 'John')).toStrictEqual(
        'Hi John'
      );
      expect(changeWord('Hi Bohdan hi', 'Bohdan', 'John')).toStrictEqual(
        'Hi John hi'
      );
    });
  });

  describe('truncate()', () => {
    it('returns correct string', () => {
      expect(truncate('Hi Bohdan', 3)).toStrictEqual('Hi ');
    });
  });

  describe('quantityOfSymbols()', () => {
    it('should return quantity of symbols', () => {
      expect(quantityOfSymbols('myTestTestString', 't')).toStrictEqual(5);
      expect(quantityOfSymbols('myTestTestString', '5')).toStrictEqual(0);
    });
  });

  describe('quantityOfSymbolsWithIndexOf()', () => {
    it('should return quantity of symbols', () => {
      expect(
        quantityOfSymbolsWithIndexOf('myTestTestString', 't')
      ).toStrictEqual(5);
      expect(
        quantityOfSymbolsWithIndexOf('myTestTestString', '5')
      ).toStrictEqual(0);
    });
  });
});
