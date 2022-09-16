import {
  capitalizeString,
  consoleLoggerWordsSplit,
  consoleLoggerWordsWhile,
  consoleLoggerWordsForOf,
  consoleLoggerWordsFor,
  fenceString,
  reducerIf,
  reducerSwitch,
} from '../index';

describe('different methods', () => {
  describe('capitalizeString()', () => {
    it('returns correct string', () => {
      expect(capitalizeString('testTEtset ests dsg')).toStrictEqual(
        'TestTEtset Ests Dsg'
      );
    });
  });

  describe('fenceString()', () => {
    it('returns correct string', () => {
      expect(fenceString('Hi all to all and all')).toStrictEqual(
        'hI AlL To aLl aNd aLl'
      );
    });
  });

  const cases = [
    {
      action: 'uppercase',
      string: 'string',
      result: 'STRING',
    },
    {
      action: 'lowercase',
      string: 'STRING',
      result: 'string',
    },
    {
      action: 'fence',
      string: 'string',
      result: 'sTrInG',
    },
    {
      action: 'capitalize',
      string: 'string string',
      result: 'String String',
    },
    {
      action: 'bla',
      string: 'string string',
      result: 'string string',
    },
  ];

  describe('reducerIf()', () => {
    it.each(cases)(
      'calls with $action and $string returns $result',
      ({ action, string, result }) => {
        expect(reducerIf(action, string)).toStrictEqual(result);
      }
    );
  });

  describe('reducerSwitch()', () => {
    it.each(cases)(
      'calls with $action and $string returns $result',
      ({ action, string, result }) => {
        expect(reducerSwitch(action, string)).toStrictEqual(result);
      }
    );
  });

  describe('consoleLoggerWordsForOf()', () => {
    it('calls console.log', () => {
      const log = jest.fn();
      global.console = { log };

      consoleLoggerWordsForOf('string');

      expect(log).toHaveBeenCalledTimes(6);
    });
  });

  describe('consoleLoggerWordsFor()', () => {
    it('calls console.log', () => {
      const log = jest.fn();
      global.console = { log };

      consoleLoggerWordsFor('string');

      expect(log).toHaveBeenCalledTimes(6);
    });
  });

  describe('consoleLoggerWordsWhile()', () => {
    it('calls console.log', () => {
      const log = jest.fn();
      global.console = { log };

      consoleLoggerWordsWhile('string');

      expect(log).toHaveBeenCalledTimes(6);
    });
  });

  describe('consoleLoggerWordsSplit()', () => {
    it('calls console.log', () => {
      const log = jest.fn();
      global.console = { log };

      consoleLoggerWordsSplit('string');

      expect(log).toHaveBeenCalledTimes(6);
    });
  });
});
