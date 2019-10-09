const express = require('express')
const app = express()

const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const {clearCookie,getCookie} = require('./cookie')

app.use(cors());
app.use(
    bodyParser.json({
        limit: '10mb',
        inflate: false,
    }),
);
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, inflate: true }));
app.use(cookieParser());
app.use(compression());


app.use('/set', require('./main'));

app.use('/get', (req,res)=>{
    const value = getCookie(req,'sz010')
    res.send(JSON.stringify(`COOKIE:${value}`))
}); 
app.use('/clear',  async (req,res)=>{
    await clearCookie(res,'sz010')
    const value = getCookie(req,'sz010')
    res.send(JSON.stringify(`COOKIE IS NOW :${value}`))
}); 

app.listen(3000)
 