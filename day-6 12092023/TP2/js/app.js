

var somme_des_notes = 0;
var notes_ajoutee = 0;
var noteInputElement = document.getElementById('note');
var resultElement = document.getElementById('result');

function ajouter(){
    
    if ( noteInputElement.value != '' ) {
        notes_ajoutee++;
        somme_des_notes = somme_des_notes + Number(noteInputElement.value);
        noteInputElement.value = '';   
    }
}

function calculer(){
    const res = ( somme_des_notes / notes_ajoutee );
    resultElement.innerHTML='<div class="alert alert-success">La moyenne = '+res+'</div>';
}
