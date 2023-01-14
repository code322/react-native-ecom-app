const db = require('./config/db');
const products = require('./products');

const seedDB = async () => {
  await db.query('DELETE FROM products');
  const sqlInsert = `INSERT INTO products (title, images, category, price, description) VALUES (?,?,?,?,? )`;

  for (const item of products) {
    const images = JSON.stringify(item.images);
    const values = [
      item.title,
      images,
      item.category,
      item.price,
      item.description,
    ];
    await db.query(sqlInsert, values);
  }

  process.exit();
};

seedDB();
