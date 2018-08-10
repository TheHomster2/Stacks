// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(function(){
  if (!exists) {
    // this sets up the schema for your data! we can talk more about designing the schema for your app
    
    // Create User
    // db.run('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, groups INTEGER ARRAY[0])');
    // // Create Group
    // db.run('CREATE TABLE group (id INTEGER PRIMARY KEY AUTOINCREMENT, owner TEXT, name_group TEXT)');
    // // Create Boards
    // db.run('CREATE TABLE boards (id INTEGER, name_board TEXT, group_id INTEGER PRIMARY KEY AUTOINCREMENT)');
    // // Create Tasks
    db.run('CREATE TABLE tasks (id INTEGER PRIMARY KEY, text_name TEXT, finish_date DATE, description TEXT)');

    console.log('New tables created!');
    
    // db.serialize(function() {
    //   db.run('INSERT INTO tasks (text_name, finish_date, description) VALUES ("Finish Projects", "2018-08-10", "We should finish.")');
    // });
  } else 
  {
    // console.log('Database "tasks" ready to go!');
    // db.each('SELECT * from tasks', function(err, row) {
    //   if ( row ) {
    //     console.log('record:', row);
    //   }
    // });
  }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// endpoint to get all the dreams in the database
// read the sqlite3 module docs and try to add your own! https://www.npmjs.com/package/sqlite3
app.get('/getTasks', function(request, response) {
  db.all('SELECT * from tasks', function(err, rows) {
    response.send(JSON.stringify(rows));
  });
});

app.post('/newTasks', function(request, response) {
  db.serialize(function() {
    // this is insecure! lookup "SQL injection"
    db.run('INSERT INTO tasks (text_name, finish_date, description) VALUES ("' + request.body.name + '", "' + request.body.date + '", "' + request.body.description + '")');
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
