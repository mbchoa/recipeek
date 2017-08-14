import mockStore from './mock-store';

describe('Mock Store Tests', () => {

  it('should create mock store with default state and options', () => {
    const store = mockStore();
    expect(store.getState())
      .toEqual({});
  });
});
