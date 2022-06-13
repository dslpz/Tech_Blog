const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();

    store: new SequelizeStore({
        db: sequelize
    })

app.use(session(sess));


const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(process.env.PORT || 3001, () => {
  sequelize.sync({ force: false });
});
