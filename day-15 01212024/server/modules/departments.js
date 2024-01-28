const mongodb = require('mongodb');
const dbURL = 'mongodb://localhost:27017';
const URL =require('url');


exports.insertDepartment = function(req,res){

    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        let docuemnt = req.body;

        db.collection('departments').insertOne(docuemnt).then(()=>{
            res.send({ success:true, message:'department inserted successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
        
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}




exports.getAllDepartments = function(req,res){
    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        db.collection('departments').find().toArray().then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.status(401).send({ success:false, message:'err con DB' });
        })
     
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}




exports.updateDepartment = function(req,res){
    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        const searchDOC = { unique_id : req.body.unique_id };


        const body = { name: req.body.name,    address:req.body.address };

        db.collection('departments').updateOne( searchDOC ,{ $set : body } ).then(()=>{
            res.send({ success:true, message:'department updated successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
     
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}






exports.deleteDepartment = function(req,res){
    const client = mongodb.MongoClient;

    client.connect(dbURL).then((server)=>{

        const db = server.db('ttcdemofulljs');

        const queries = URL.parse(req.url,true).query;
        
        const searchDOC = { unique_id : queries.id  };

 
        db.collection('departments').deleteOne( searchDOC ).then(()=>{
            res.send({ success:true, message:'department deleted successfully' });
            
        }).catch((err)=>{
            res.send({ success:false, message:'Something went wrong.' });
            
        })
     
    }).catch((err)=>{
        res.status(401).send({ success:false, message:'err con DB' });
    })
 
}






