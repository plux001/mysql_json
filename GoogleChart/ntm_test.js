var express    =  require("express");  
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
    host: '192.168.25.30',
    user: '',
    password: '',
    database: 'LOG_DATA'
});  
var app = express();  
  
connection.connect(function(err){  
if(!err) {  
    console.log("Database is connected ... \n\n");    
} else {  
    console.log("Error connecting database ... \n\n");    
}  
});  
  
app.get("/",function(request,response){  
//connection.query('SELECT * from Person', function(err, rows, fields) {  
    connection.query('SELECT * FROM LOG_DATA.BS_P_T_BEAM_CURR_PARAMS', function(err, rows, fields) {  
        console.log('001');  
    connection.end();  
    if (!err){  
        var data="<html><head><title>mysql test</title></head>"  
        data+="<h1>주소록</h1>"  
        data+="<table border=\"1\">"    
        data+="<tr><th>Name</th><th>Address</th></tr>"  
        console.log('002');  
    
        for (var i in rows){  
            data += "<tr>"  
                    data += "<td>"+rows[i].name +"</td>"  
            data += "<td>"+rows[i].address+"</td>";  
            data += "</tr>"  
        }  
        
        console.log('003');  
        
        data+="</table></html>"  
        
        console.log('004');  
        response.send(data);  
        console.log('005');  
        
    }  
    else  
        console.log('Error while performing Query.');  
    });  
});  
  
app.listen(3000);  