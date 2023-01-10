const db = require('../config/db');

const getAllProducts = async (req, res) => {
  const query = 'SELECT * FROM products';
  try {
    const [result] = await db.query(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = getAllProducts;
