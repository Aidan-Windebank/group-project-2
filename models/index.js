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

Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

Category.hasMany(Post)

module.exports = { User, Post, Category};
