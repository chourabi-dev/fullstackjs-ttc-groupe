const mongodb = require('mongodb');
const dbURL = 'mongodb://localhost:27017';
const URL =require('url');
const collection = 'admins';
var jwt = require('jsonwebtoken');

exports.createAccount = function(req,res){

    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        let docuemnt = req.body; // { username , password }

        db.collection(collection).insertOne(docuemnt).then(()=>{
            res.send({ success:true, message:'account created successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
        
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}





exports.auth = function(req,res){

    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        let body = req.body; // { username , password }

        db.collection(collection).findOne( { username: body.username, password:body.password } ).then((admin)=>{

            if( admin == null ){
                res.send({ success:false, message:"wrong username or password" })
            }else{
                // WE MUST GENERATE A TOKEN FOR USER !!!!

                var token = jwt.sign({ admin:admin }, 'secret-key');

                res.send({ token: token });
            }

        })
        
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}