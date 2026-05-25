const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.json({
    app: 'liftoff-test-node-dockerfile',
    stack: 'node-express',
    mode: 'root-dockerfile-priority',
    ok: true,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
