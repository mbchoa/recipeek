import t from 'tcomb';

const Method = t.enums.of(['GET', 'POST', 'HEAD', 'PUT', 'DELETE'], 'Method');
const Headers = t.dict(t.String, t.String);

export const RequestOptions = t.struct({
  method: Method,
  headers: Headers,
  url: t.String,
}, 'RequestOptions');
