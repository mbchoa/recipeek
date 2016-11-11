import { titleCase } from './string';

describe('String Helpers Tests', () => {
  it('should make each word in the sentence title case', () => {
    expect(titleCase('this sentence should be title case'))
      .to.equal('This Sentence Should Be Title Case');
  });
});