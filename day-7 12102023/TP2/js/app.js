function more() {
    
    document.getElementById('suite').style.display = 'block';
    document.getElementById('more').style.display = 'none';
    document.getElementById('less').style.display = 'block';
    
    

}


function less() {
    
    document.getElementById('suite').style.display = 'none';
    document.getElementById('more').style.display = 'block'; 
    document.getElementById('less').style.display = 'none';
    
    

}



function changeStatus(){

    if( document.getElementById('avatar').className.indexOf('connected') != -1 ){

        document.getElementById('avatar').className = 'avatar';
    }else{
        document.getElementById('avatar').className='avatar connected'
    }
}





function connect() {
    var elements = document.getElementsByClassName('form-control');

    for (let i = 0; i < elements.length ; i++) {
        const element = elements.item(i);

        if( element.value == '' ){
            element.className= 'form-control is-invalid';
        }else{
            element.className= 'form-control is-valid';
        }
        
    }
}