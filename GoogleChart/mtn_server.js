var mysql = require('mysql');
var express = require('express');
var debug = require('debug');
var app = express();
var country = [], population = [], gdp = [];
var jsonArray;

var connection = mysql.createConnection({
  host: '192.168.25.30',
  user: '',
  password: '',
  database: 'LOG_DATA'
});

var queryString = 'SELECT * FROM LOG_DATA.BS_P_T_BEAM_CURR_PARAMS';

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //connection.query(queryString, function (err, result, fields) {
  connection.query(queryString, function (err, result) {
    if (err) throw err;
    // Object.keys(result).forEach(function(key) {
      // var row = result[key];
      // console.log(row);
      // debug('key >', key);
      // console.log(row);
      console.log(result[0][0]);
    // });
  });
});

/*
var queryString = 'SELECT * FROM LOG_DATA.BS_P_T_BEAM_CURR_PARAMS';

// Fetching data from database
app.get('/', function(req, res) { 
  connection.query(queryString, function(err, rows, fields) {
    if(err) {
      console.log("Error");
      throw err;
    }
    formatData(rows);
    res.send(jsonArray);
    console.log(jsonArray);
    //console.log("-------------------------------");
  });
});

function formatData(dataArray) {
  for(var i = 0; i < dataArray.length; i++) {
    country[i] = dataArray[i].name;
    population[i] = dataArray[i].population;
    gdp[i] = dataArray[i].GDP;
  }
  jsonArray = [country, population, gdp];
  console.log(" in FormatData()...\n");
  console.log(jsonArray);
}

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
*/