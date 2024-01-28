const express = require('express')
const app = express()
const port = 8080

const URL = require('url');
const bodyparser = require('body-parser');
const { createNewEmployee, insertEmployees, getAllEmployees, updateEmployee, deleteEmployee } = require('./modules/employees');
 
const { insertDepartment, getAllDepartments, updateDepartment, deleteDepartment } = require('./modules/departments');
const { createAccount, auth } = require('./modules/auth');

var jwt = require('jsonwebtoken');

var cors = require('cors')

app.use(cors())

// activate body parser !!

app.use(bodyparser.json());


// MIDDLEWARE !!
app.use(function(req,res,next){

    const token = req.headers.authorization; 
    const path = URL.parse(req.url).path;

 


    switch (path) {
        case '/api/auth':
            next();
        break;
        case '/api/create-account':
            next();
        break;

        default:

            let connected = false

            try {
                var decoded = jwt.verify(token, 'secret-key');

                if( decoded.admin != null ){
                    connected = true;
                }
            } catch (error) {
                
            }


            if ( connected == true ) {
                next();
            } else {
                res.status(401).send({ success:false, message:"full auth is required" })
            }
        break;
    }
   

});


app.post('/api/department',(req,res)=>{
    insertDepartment(req,res);
})

app.get('/api/department',(req,res)=>{
    getAllDepartments(req,res);
})


app.put('/api/department',(req,res)=>{
    updateDepartment(req,res);
})


app.delete('/api/department',(req,res)=>{
    deleteDepartment(req,res);
})





app.post('/api/employees',(req,res)=>{
    insertEmployees(req,res);
})

app.get('/api/employees',(req,res)=>{
    getAllEmployees(req,res);
})


app.put('/api/employees',(req,res)=>{
    updateEmployee(req,res);
})


app.delete('/api/employees',(req,res)=>{
    deleteEmployee(req,res);
})


// auth module

app.post('/api/create-account',(req,res)=>{
    createAccount(req,res)
})

app.post('/api/auth',(req,res)=>{
    auth(req,res)
})



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

