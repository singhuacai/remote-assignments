const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.static('public'));

// 因為想從Request Payload中的data拿值，且其為JSON格式
// 所以需引進 body-parser 及 bodyParser.json()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

function query(sql, param) {
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

    return new Promise((resolve, reject) => {
        con.query(sql, param, (err, result) => {
            if (err) throw err;
            con.end(function (err) {
                if (err) throw err;
                console.log("MySQL Connect-end!");
            });
            resolve(result);
        })
    })
}

// signUp
app.post('/homepage', async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    let sql = "SELECT count(*) AS CNT FROM user WHERE email=?";
    const ret = await query(sql, email);
    if (ret[0].CNT === 0) {
        let post = { email: email, password: password };
        let sql = "INSERT INTO user SET ?";
        await query(sql, post);
        res.redirect('/member.html');
    } else {
        res.send("This email has already been registered");
    }
})

//signIn
app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    let sql = "SELECT count(*) AS CNT FROM user WHERE email=? AND password=?";
    const ret = await query(sql, [email, password]);
    if (ret[0].CNT !== 0) {
        res.redirect('/member.html');
    } else {
        res.send("The email or password is wrong! Please try again!");
    }
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

app.listen('3000', () => {
    console.log('Server started on port 3000');
})