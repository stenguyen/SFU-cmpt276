const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// require the pg package
const {Pool} = require('pg');
var pool;
// create a connection to the database
pool = new Pool({
  // string that connects you to the database
  // scheme:userthatisnamedpostgres:password for postgress@localhost on pc/the database named users

  // connectionString: 'postgres://postgres:Tritrung01@localhost/users' (this string is for use on pc, not heroku)
  connectionString: process.env.DATABASE_URL
})


var app = express();
// always need these two things to work with json / javascript
// need this to encode url to work with it in the server and to understand json
app.use(express.json());
// always need this for every server coded in node
app.use(express.urlencoded({extended:false}));

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
  // var data = {results: [2,3,4,5,6]};

  // selects all of the rows from the users table
  var getUsersQuery = 'SELECT * FROM usr';
  pool.query(getUsersQuery, (error,result) => {
    // if error object from result of this query, send error
    if(error)
      res.end(error);
    // assign a variable rows with all the data as an array that holds the data
    var results = {'rows':result.rows}
    // render the page db.ejs in the pages folder after you send in var results
    res.render('pages/db', results);
  })
});

// if you see a post request of adduser, do this
app.post('/adduser', (req,res)=>{
  console.log("post request for /adduser");
  // from the request in myform.html, there is a var named uname and age
  // receive that data and put it in these variabels
  var uname = req.body.uname;
  var age = req.body.age;
  // ${} can be used to place variables in 
  // print this on the page (not in proper html form, need render for that)
  res.send(`username: ${uname}, age:${age}`);
});

// can identify the id's that goes with the path
// the colon id is an identifier for the page 
app.get('/user/:id', (req,res) =>{
  // show the parameters named id in the console
  // the id is whatever comes after the colon 
  console.log(req.params.id);
  // so you don't get the spinning circle on the page/not waiting for response
  // search the database for the uid
  res.send("got it!");
});



// port that we defined to listen to
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


