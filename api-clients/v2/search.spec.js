import { createRequestOptions } from './search';
import { RequestOptions } from '../common';

describe('v2 Search API Tests', () => {

  describe('#createRequestOptions', () => {

    it('creates request options with the correct defaults', () => {
      expect(RequestOptions.is(createRequestOptions('chicken')))
        .to.be.true;
    });

    it('should generate the correct URL request string', () => {
      expect(createRequestOptions('chicken').url)
        .to.equal('/api/v2/search/chicken');
    });

  });

});
