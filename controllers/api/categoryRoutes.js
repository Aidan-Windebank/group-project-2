const router = require('express').Router();
const { Category, Post } = require('../../models');


router.get('/', async (req, res) => {
  const results = await Category.findAll();
  res.status(200).json({ results });
});

module.exports = router;