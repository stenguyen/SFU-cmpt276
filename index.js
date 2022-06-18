const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
// add path so the site can use embedded javascript (ejs)
app.set('views', path.join(__dirname, 'views'));
// render with embedded javascript
app.set('view engine', 'ejs');

// essentially render the opening/first page from heroku
app.get('/', (req, res) => res.render('pages/index'));
// what you do if you get a request if it is database
// request and response
app.get('/database', (req,res) => {
  // results is an object with an array with these objects
  var data = {results: [2,3,4,5,6]};
  // render the page db.ejs in the pages folder after you send in var data
  res.render('pages/db', data);
});


// port that we defined to listen to
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


