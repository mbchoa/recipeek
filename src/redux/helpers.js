export const fsa = type => () => ({ type });
export const fsaPayload = type => payload => ({
  type,
  payload
});
