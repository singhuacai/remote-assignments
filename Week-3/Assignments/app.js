const express = require("express");
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("<h1> Hello, My Server! </h1>");
})

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
})

app.get('/myName', (req, res) => {
    res.send("<h2> Welcome to my Server! </h2>");
})

app.listen('3000',() =>{
    console.log('My Server is running on localhost: 3000!');
});