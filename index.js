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

  // (this string is for use on pc, not heroku)
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
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
// 'pages/index was the old one
app.get('/', (req, res) => res.render('pages/studentIndex'));
// what you do if you get a request if it is database
// request and response
app.get('/database', async (req, res) => {
  try{
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM Student');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  }
  catch (err){
    console.error(err);
    res.send("Error " + err);
  }
})


//add student to database
app.post('/addstudent', async(req, res) => {
  // receive the data from the page 
  let name = req.body.name;
  let weight = req.body.weight;
  let height = req.body.height;
  let colour = req.body.colour;
  let gpa = req.body.gpa;

  // add new student into the database given data
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO Student VALUES(DEFAULT, '${name}', ${weight}, ${height}, '${colour}', ${gpa})`);
    res.redirect('/database');
  } 
  catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

// select the studetn given the id
app.get('/studentsLargeList/:id', async (req,res)=>{ 
  var id = req.params.id;
  try{
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM Student WHERE id = '${id}'`);
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/studentSpecific', results );
    client.release();
  }
  catch (err){
    console.error(err);
    res.send("Error " + err);
  }
})


// edit or delete a student from the database
app.post('/studentsLargeList/:id', async (req,res) =>{
  // determine the value of the button being pressed
  let buttonValue = req.body.button;
  // if the delete button, delete the student
  if(buttonValue == "delete"){
    try {
      const client = await pool.connect();
      const result = await client.query(`DELETE FROM Student WHERE id = '${req.params.id}'`);
      res.redirect('/database');
      client.release();
    } 
    catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  // if not the delete button, edit the student info
  else{
    res.redirect(`/edit/${req.params.id}`);
  }
});


// edit the student info given their id
app.get('/edit/:id', async (req, res)=>{
  // select the correct id from the table
  try{
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM Student WHERE id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/edit', results);
    client.release();
  } 
  // if an error
  catch (err){
    console.error(err);
    res.send("Error " + err);
  }
})

// add to the database
app.post('/edit/:id', async(req, res) =>{
  // receive the data from the page 
  let name = req.body.name;
  let weight = req.body.weight;
  let height = req.body.height;
  let colour = req.body.colour;
  let gpa = req.body.gpa;

  try {
    const client = await pool.connect();
    const editQuery = `UPDATE Student SET name = '${name}', weight = ${weight}, height = ${height}, colour = '${colour}', gpa = ${gpa} WHERE id = ${req.params.id}`;
    await client.query(editQuery);
    res.redirect('/database');
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

// when add button is pressed, render the new student page
app.get('/add', async(req,res)=> {
  res.render('pages/newStudent')
})

// when view large database is pressed, render large student database
app.get('/view', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM Student');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/studentsLargeList', results );
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send("Error " + err);
    }
})

// port that we defined to listen to
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


