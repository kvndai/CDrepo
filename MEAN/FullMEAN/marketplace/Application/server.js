const express  = require( 'express' );
const session = require('express-session');
const bp = require("body-parser");
const path = require("path");
const root = __dirname;
const app = express();
const port = 8000;

app.use( express.static('./public/dist' ));
app.use(bp.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

require('./server/config/db.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( "server running on " + port);
});
