const express = require("express");
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send("<h1> Hello, My Server! </h1>");
})
/*==============Assignment2 & 3 SUM(below)=================*/
app.get('/data', (req, res) => {
    const param = req.query.number;           // param = req.query.number =>string
    if(param){
        const num = Number(param);            // 將 param 轉型為數字，若參數內非數字，則顯示 NaN
        if(Number.isInteger(num) && num>0){
            const sum = (1+num)*num/2;
            return res.send(`<h1>${sum}</h1>`);
        }else{
            return res.send('<h1>Wrong Parameter</h1>');
        }
    }
    return res.send('<h1>Lack of Parameter</h1>');
});

/*==============Assignment4 Cookie(below)=================*/
app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if(name){
        res.render('index',{ name });
    }else{
        res.render('input');
    }
})

app.post('/trackName', (req, res) =>{
    res.cookie('name', req.body.name);
    res.redirect('/myName');
})

app.post('/goodbye',(req, res) => {
    res.clearCookie('name');
    res.redirect('/myName');
})

app.listen('3000',() =>{
    console.log('My Server is running on localhost: 3000!');
});