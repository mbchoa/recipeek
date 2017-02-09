import express from 'express';
import request from 'request';

export default function startAppServer(port) {
  const app = express();
  app.use(express.static(__dirname));
  app.use('/api/*', (req, res) => {
    const proxyPath = `${process.env.API_BASE_URL}:${port-1}${req.originalUrl}`;
    request(proxyPath).pipe(res);
  });

  app.listen(port, function () {
    console.log(`Recipeek express server listening on port ${this.address().port} in ${process.env.NODE_ENV} mode`);
  });
};
