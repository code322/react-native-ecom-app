const express = require('express');
const app = express();

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('main');
});

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
