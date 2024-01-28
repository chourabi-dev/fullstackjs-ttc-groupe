const mongodb = require('mongodb');
const dbURL = 'mongodb://localhost:27017';
const URL =require('url');
const collection = 'employees';

exports.insertEmployees = function(req,res){

    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        let docuemnt = req.body;

        db.collection(collection).insertOne(docuemnt).then(()=>{
            res.send({ success:true, message:'employee inserted successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
        
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}




exports.getAllEmployees = function(req,res){
    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        db.collection(collection).find().toArray().then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.status(401).send({ success:false, message:'err con DB' });
        })
     
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}




exports.updateEmployee = function(req,res){
    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        const searchDOC = { cin : req.body.cin };


        const body = { 
            fullname: req.body.fullname,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            cin: req.body.cin,
            department:req.body.cin
        };

        db.collection(collection).updateOne( searchDOC ,{ $set : body } ).then(()=>{
            res.send({ success:true, message:'employee updated successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
     
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}






exports.deleteEmployee = function(req,res){
    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        const queries = URL.parse(req.url,true).query;
        
        const searchDOC = { cin : queries.cin  };

 
        db.collection(collection).deleteOne( searchDOC ).then(()=>{
            res.send({ success:true, message:'employee deleted successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
     
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}






