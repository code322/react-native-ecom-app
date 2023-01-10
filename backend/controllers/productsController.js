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

const getProduct = async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FORM products WHERE _id=?';
  try {
    const [result] = await db.query(query, [id]);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getProduct };
