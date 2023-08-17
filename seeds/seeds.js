const sequelize = require('../config/connection');
const { User, Post, Category} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData, {
  
  });

  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }

  process.exit(0);
};

seedDatabase();
