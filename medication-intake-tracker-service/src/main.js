const express = require('express');
const cors = require('cors');

const expressApp = express();
const port = 8090;

const startServer = (app) => {
  app.use(cors());
  app.use(express.json());

  app.use('/', (__req, res) => {
    res.status(200).json({hello: 'Hello'});
  });

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${port}`);
  });
};

startServer(expressApp);
