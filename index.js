const express = require('express');
const app = express();

app.set('port', process.env.PORT | 8080);

app.get('/', (req, res, next) => {
  res.send(JSON.stringify(process.env, 2));
});

app.listen(app.get('port'), (err) => {
  if (err) throw err;
  console.log(`server listening on port ${app.get('port')}`);
});
