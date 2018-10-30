const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.engine('jsx', require('express-react-views').createEngine())

require('./routes')(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
