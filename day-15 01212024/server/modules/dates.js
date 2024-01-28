// DATE
exports.getDate = function(req,res){

    const date = new Date();

    res.send( { date: date.getDate() });
}

// Mois

exports.getMonth = function(req,res){
    const date = new Date();

    res.send( { date: ( date.getMonth() + 1) });
}
// YEAR 
exports.getYear = function(req,res){
    const date = new Date();

    res.send( { date: ( date.getFullYear()) });
}