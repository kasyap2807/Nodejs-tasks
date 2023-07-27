

var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    pass: ""
    
});
exports.createdatabase = function(){
con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    // crate databse
    con.query("create database parameter;",function(err,result){
        if(err) throw err;
        console.log("db created");
    })
    // var sql ="create table student();";
    con.query("use parameter;",function(err,result){
        if(err) throw err;
        console.log("db used");
    })
    var sql ="create table student(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255),department VARCHAR(100),salary DECIMAL(10,2));";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log("table created");
    })
}); 
}
// exports.createtable = function(){
//     con.connect(function(err){
//         if(err) throw err;
//         console.log("connected!");
//         con.query("use parameter;",function(err,result){
//             if(err) throw err;
//             console.log("db used");
//         })
//         var sql ="create table student(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255),department VARCHAR(100),salary DECIMAL(10,2));";
//         con.query(sql, function(err,result){
//             if(err) throw err;
//             console.log("table created");
//         })
//     });
// }