import { titleCase } from './index';

describe('Utilities Test Suite', () => {
  describe('#titleCase', () => {
    it('should format input in title case', () => {
      expect(titleCase('test input')).toStrictEqual('Test Input');
    });
  });
});
