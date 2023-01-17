const express = require('express');
const app = express();
const productsRoute = require('./routes/productsRoute');
const authRoutes = require('./routes/authRoute');

const PORT = 5000 || process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('main');
});

app.use('/api/products', productsRoute);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
