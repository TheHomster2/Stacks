// Create User
db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, groups INTEGER ARRAY[0])');

// Create Group
db.run('CREATE TABLE IF NOT EXISTS group (id INTEGER PRIMARY KEY AUTOINCREMENT, owner TEXT, name_group TEXT)');

// Create Boards
db.run('CREATE TABLE IF NOT EXISTS boards (id INTEGER, name_board TEXT, group_id INTEGER PRIMARY KEY AUTOINCREMENT)');

// Create Tasks
db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER, text_name TEXT, finish_date DATE)');

//Insert User 
var email = "";
var name = "";
var groups = [0]; //Temporary asign groups
db.run('INSERT INTO user(email, name, groups) VALUES ((email), (name), (groups))');

//Insert Group 
var owner = "";
var name_group = ""; 
db.run('INSERT INTO group (owner, name_group) VALUES ((owner), (name_group))');

//Insert Board
var name_board = "";
var id = 0;
db.run('INSERT INTO boards (id, name_board) VALUES ((id), (name_board))');

//Insert Task
var id = 0;
var text_name = "";
var finish_date = '0000-00-00';
db.run('INSERT INTO task (id, text_name, finish_date) VALUES ((id), (text_name), (finish_date))');

//Update Group Name
var name_group = ""; 
var id = 0; //How to get group id?
db.run('UPDATE group SET name_group = (name_group) WHERE id = (id)');

//Update Board Name
var name_board = ""; 
var id = 0; //How to get group id?
db.run('UPDATE board SET name_board = (name_board) WHERE group_id = (id)');

//Update Task text
var text_name = ""; 
var id = 0; //How to get board id?
db.run('UPDATE tasks SET text_name = (text_name) WHERE id = (id)');

//Update Task finish date
var finish_date = '0000-00-00'; 
var id = 0; //How to get board id?
db.run('UPDATE tasks SET finish_date = (finish_date) WHERE id = (id)');

//Delete Group
var id = 0; //How to get group id from user?
db.run('DELETE FROM group WHERE id = (id)');

//Delete Board
var id = 0; //How to get board id from group?
db.run('DELETE FROM boards WHERE id = (id)');

//Delete Task
var id = 0; //How to get task id from task?
db.run('DELETE FROM tasks WHERE id = (id)');

//Delete User
var id = 0; //How to get user id from user?
db.run('DELETE FROM user WHERE id = (id)');

// Show Groups 
// db.each('SELECT groups FROM Users', function(err, row) {
//       if ( row ) {
//         console.log('group:', row);
//       }
//     });
// SUM() Use to sum total groups 