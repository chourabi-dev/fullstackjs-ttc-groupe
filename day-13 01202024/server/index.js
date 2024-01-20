/**
 *  CREATING SERVER WITHOUT EXRESS
 * const http = require('http');

http.createServer((req,res)=>{

    console.log("server is running...");


    res.write("bonjour");
    res.end();

}).listen(8080);
 */


const express = require('express')
const app = express()
const port = 8080

const URL = require('url');
const bodyparser = require('body-parser');
const { createNewEmployee } = require('./modules/employees');
const { getDate, getMonth, getYear } = require('./modules/dates');


// activate body parser !!

app.use(bodyparser.json());


// GET POST PUT DELETE
// PATH QUERY

app.get('/helloworld', (req,res)=>{
    // code goes here ...
    res.send("hello world, server is running with devtool nodemon")
})

app.get('/somme', (req,res)=>{
    // code goes here ...

    // reading url queries !!
     const queries = URL.parse( req.url, true ).query;

     console.log(queries);

     const x = Number(queries.x);
     const y = Number(queries.y);
    

     switch (queries.z) {
        case '1': // somme
            res.send("somme : "+(x+y))
        break;
        case '2': // sous
            res.send("sous : "+(x-y))
        break;
        case '3': // multi
            res.send("multi : "+(x*y))
        break;
         
        default:
            res.send("operation is required !!")
            break;
     }
    
})


app.post('/add-employee',(req,res)=>{

    const body  = req.body;

    console.log(body);

    res.send("ok !!");
    
})



// API /user

app.get('/user',(req,res)=>{
    res.send("get user");
})
app.post('/user',(req,res)=>{
    res.send("post user");
})
app.put('/user',(req,res)=>{
    res.send("put user");
})
app.delete('/user',(req,res)=>{
    res.send("delete user");
})


// APP


app.get('/get-date',(req,res)=>{
    getDate(req,res);
})

app.get('/get-month',(req,res)=>{
    getMonth(req,res);
})


app.get('/get-year',(req,res)=>{
    getYear(req,res);
})





app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

