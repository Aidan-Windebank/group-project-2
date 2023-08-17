const User = require('./User');
const Post = require('./Post');
const Category = require('./Category')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Post, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = { User, Post, Category};