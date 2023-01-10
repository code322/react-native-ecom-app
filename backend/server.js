const express = require('express');
const app = express();
const productsRoute = require('./routes/productsRoute');

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('main');
});

app.use('/api/products', productsRoute);

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
