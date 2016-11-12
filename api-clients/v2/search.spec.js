import { omit } from 'lodash';

import search, { createRequestOptions } from './search';
import { RequestOptions } from '../common';
import { createMockRequest } from '../../helpers/request';
import { recipesOk } from './fixtures';
import Recipes from './models/Recipes';

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

    it('should call request with requestOptions', () => {
      const request = sinon.stub();
      request.returns(new Promise(() => {}, () => {}));
      const requestOptions = createRequestOptions('chicken');

      search(request, 'chicken');

      expect(request.calledWith(
        requestOptions.url,
        omit(requestOptions, 'url')
      )).to.be.true;
    });

  });

  describe('#search', () => {
    const { request, resolveResponse } = createMockRequest();
    it('should resolve with payload with an OK response', done => {
      search(request, 'chicken')
        .then(result => {
          expect(Recipes.is(result))
            .to.be.true;
          done();
        }, done.fail);

      resolveResponse(recipesOk);
    });

  });
});
