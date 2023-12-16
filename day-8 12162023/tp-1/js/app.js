var fullnameElement = document.getElementById('fullname');
var emailElement = document.getElementById('email');
var addressElement = document.getElementById('address');
var phoneElement = document.getElementById('phone');
var tbodyElement = document.getElementById('tbody');

var employees = [];



function add(){
    // control

    const controls = document.getElementsByClassName('form-control');

    let canAdd = true;

    for (let i = 0; i < controls.length; i++) {
        const element = controls.item(i);

        if( element.value == '' ){
            element.className = 'form-control is-invalid'
            canAdd = false;
        }else{
            element.className = 'form-control is-valid'
        }
        
    }



    if (canAdd == true) {
        // we will build the object !!!!!!
        const employee = { fullname: fullnameElement.value, email:emailElement.value, address:addressElement.value, phone:phoneElement.value };


        console.log(employee);


        employees.push(employee); // client side !!!

        // background task

        // call server via api !!

        showDATA();
    }

}

function deleteEmployee(index){
    
    employees.splice(index,1);

    showDATA();
}


function showDATA() {

    let blocHTML = '';

    employees.map((e,i)=>{
        blocHTML = blocHTML + `
            <tr>
                <td>${ e.fullname }</td>
                <td>${ e.email }</td>
                <td>${ e.address }</td>
                <td>${ e.phone }</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteEmployee(${i})" >delete</button></td>
                    
            </tr>
        ` ;
    })
    tbodyElement.innerHTML = blocHTML;
}