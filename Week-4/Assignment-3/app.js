const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.static('public'));


// Create connection
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'As6520577',
    database: 'assignment'
});

//Connect
con.connect(function (err) {
    if (err) throw err;
    console.log("MySQL Connected!");
});
// app.get('/member', (req, res) => {
//     res.send("/member.html");
// });

// signUp
app.get('/homepage', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    console.log(email);
    console.log(password);
    con.query(`SELECT count(*) AS CNT FROM user WHERE email='${email}'`, (err, result) => {
        if (err) throw err;
        if(result[0].CNT === 0){
            // console.log('add!');
            let post = {email: email, password: password};
            let sql = "INSERT INTO user SET ?";
            con.query(sql, post, (err, result) => {
                if(err) throw err;
                console.log(result);
                res.redirect('/member.html');
            })
        }else{
            // console.log('omit!');
            res.send("This email has already been registered");
        }
    });
})

//signIn
app.get('/signin', (req, res) =>{
    const email = req.query.email;
    const password = req.query.password;
    console.log(email);
    console.log(password);
    con.query(`SELECT count(*) AS CNT FROM user WHERE email='${email}' AND password='${password}'`, (err, result) => {
        console.log(result[0].CNT);
        if(result[0].CNT !== 0){
            res.redirect('/member.html');
        }else{
            res.send("The email or password is wrong! Please try again!");
        }
    })
})

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE assignment';
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Database created");
    })
})

// Create table
app.get('/createusertable', (req, res) => {
    var sql = "CREATE TABLE user (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('user table created');
    })
})

// insert item
app.get('/addpost', (req, res) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let post = { email: email, password: password };
    let sql = "INSERT INTO posts SET ?";
    con.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    })
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
})