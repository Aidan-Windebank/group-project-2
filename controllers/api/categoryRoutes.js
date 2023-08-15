const router = require('express').Router();
const { Category } = require('../../models');



router.get('/', async (req, res) => {
  const results = await Category.findAll({include:{model:Category}}).catch((err) => { res.json(err) });
  res.status(200).json({ results });
});

module.exports = router;