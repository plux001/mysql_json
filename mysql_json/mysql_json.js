var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host: '192.168.25.30',
    user: '',
    password: '',
    database: 'LOG_DATA'
});

mysqlJson.query(
    "SELECT * FROM LOG_DATA.BS_P_T_BEAM_CURR_PARAMS",
    function(err, response) {
        if (err) throw err;
        console.log(response);
    }
);

// Insert new document with login=root, firstname=John, lastName=Doe, Age=45
mysqlJson.insert('myTable', {
    login:'root',
    firstName:'John',
    lastName:'Doe',
    age:45
}, function(err, response) {
    if (err) throw err;
    console.log(response);
});

// Update any documents and set lastname=foo, age=47 where login=root
mysqlJson.update(
    'myTable',
    {lastName:'Foo', age:27},
    {login:{operator:'=', value:'root'}},
    function(err, response) {
        if (err) throw err;
        console.log(response);
    }
);


// Delete any documents where login=root
mysqlJson.delete(
    'myTable', 
    {login:{operator:'=', value:'root'}},
    function(err, response) {
        if (err) throw err;
        console.log(response);
    }
);

