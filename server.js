const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


//image stuff
// const fileUpload = require('express-fileupload');
// app.use(fileUpload());

// app.post('/upload', async (req, res) => {
//   console.log(req.files)
//   const {name, data} = req.files.pic;
//   if(name && data) {
//     await knex.insert({name: name, img: data}).into('img'); // 
//     res.sendStatus(200);
//   } else {
//     res.sendStatus(400);
//   }
  
// })

// app.get('img/:id', async (req, res) => {
//   const id = req.params.id;
//   const img = await knex('img').where({id: id}).first();
//   if (img) {
//     res.end(img.img);
//   } else {
//     res.end('no img with that id')
//   }
// })

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
