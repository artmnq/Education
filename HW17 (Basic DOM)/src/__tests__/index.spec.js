import { paintCards } from '../index';

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

describe('paintCards', () => {
  describe('should paint each element', () => {
    const dom = new Array(17).fill({ style: { backgroundColor: '' } });
    jest.spyOn(document, 'querySelectorAll').mockReturnValue(dom);
    jest.spyOn(document, 'getElementsByTagName').mockReturnValue(dom);
    jest.spyOn(document, 'getElementsByClassName').mockReturnValue(dom);

    paintCards();

    it.each(dom)('checks', ({ style: { backgroundColor } }) => {
      expect(backgroundColor).toStrictEqual('red');
    });
  });
});
