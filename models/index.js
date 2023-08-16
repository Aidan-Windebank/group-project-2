const User = require('./User');
const Post = require('./Post');
const Category = require('./Category')

// User.hasMany(Post, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Category.hasMany(Post, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE'
// });

// Post.belongsTo(Category, {
//   foreignKey: 'category_id'
// })

User.belongsToMany(Category, {

  through: {

    model: Post,
    unique:false,
    // foreignKey:'category_id'

  },

  as: "user_categories",
 

}

)



Category.belongsToMany(User, {

  through: {

    model: Post,
    unique:false,
    // foreignKey:'user_id'

  },

  as: "category_users"

})


module.exports = { User, Post, Category};