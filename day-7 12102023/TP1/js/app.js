/*
const notes = [12,16,13,20,13,18,6,9,7,5,3,12]
undefined
notes.push(20)
13
notes.pop()
20
notes
(12) [12, 16, 13, 20, 13, 18, 6, 9, 7, 5, 3, 12]
notes.shift()
12
notes.shift()
16
notes
(10) [13, 20, 13, 18, 6, 9, 7, 5, 3, 12]
notes.splice(3,1)
[18]
notes
(9) [13, 20, 13, 6, 9, 7, 5, 3, 12]
notes.join()
'13,20,13,6,9,7,5,3,12'
const str = notes.join()
undefined
str
'13,20,13,6,9,7,5,3,12'
str.split(',')
(9) ['13', '20', '13', '6', '9', '7', '5', '3', '12']



notes.sort( ( a,b ) => a - b  )
(12) [3, 5, 6, 7, 9, 12, 12, 13, 13, 16, 18, 20]
notes.sort( ( a,b ) => b - a  )
(12) [20, 18, 16, 13, 13, 12, 12, 9, 7, 6, 5, 3]


const sales = []
undefined
const sales = [ { date:new Date('2007-01-01'), amount:2500 },{ date:new Date('2006-02-01'), amount:2500 },{ date:new Date('2010-01-01'), amount:2500 }, ]
undefined
sales
(3) [{…}, {…}, {…}]
0
: 
{date: Mon Jan 01 2007 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
1
: 
{date: Wed Feb 01 2006 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
2
: 
{date: Fri Jan 01 2010 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
length
: 
3
[[Prototype]]
: 
Array(0)
sales.sort( (a,b)=> a.date - b.date  )
(3) [{…}, {…}, {…}]
0
: 
{date: Wed Feb 01 2006 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
1
: 
{date: Mon Jan 01 2007 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
2
: 
{date: Fri Jan 01 2010 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
length
: 
3
[[Prototype]]
: 
Array(0)
sales.sort( (a,b)=> a.date.getTime() - b.date.getTime()  )
(3) [{…}, {…}, {…}]
0
: 
{date: Wed Feb 01 2006 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
1
: 
{date: Mon Jan 01 2007 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}
2
: 
{date: Fri Jan 01 2010 01:00:00 GMT+0100 (heure normale d’Europe centrale), amount: 2500}


const notes = [12,16,13,20,13,18,6,9,7,5,3,12]
undefined
const demo = notes.filter( (e)=> e > 10 )
undefined
demo
(7) [12, 16, 13, 20, 13, 18, 12]
notes.map( (e)=>{ e * 2  } )
(12) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
notes.map( (e)=>{  console.log(e.*2)  } )
VM1241:1 Uncaught SyntaxError: Unexpected token '*'
notes.map( (e)=>{  console.log(e*2)  } )
VM1249:1 24
VM1249:1 32
VM1249:1 26
VM1249:1 40
VM1249:1 26
VM1249:1 36
VM1249:1 12
VM1249:1 18
VM1249:1 14
VM1249:1 10
VM1249:1 6
VM1249:1 24


let newarray = []

notes.map( (e)=>{   newarray.push(e * 2 )  } )

(12) [24, 32, 26, 40, 26, 36, 12, 18, 14, 10, 6, 24]

 */


/****************************************** TP 1 ***************************************** */


// create a todo list app
var todoElement = document.getElementById('todo');
var todos = [];
var listElement = document.getElementById('list');
var searchElement = document.getElementById('search-input');

function ajouter(){
    // 1 we need get the text from the input !!
    const todo = todoElement.value;


    // 2 we need to insert todo in an array !!
    todos.push(todo);

    // 3 we need to clear the input !!
    todoElement.value = '';

    // 4 we need to refrech the list
    affichage(todos);
}

/**
 * SARRA
 * function affichage() {
    todos.map( (t)=>{
        listElement.innerHTML = listElement.innerHTML + '<li class="list-group-item">'+t+'</li>';
    })
}
 */

function affichage(arry) {
    let blocHTML = '';

    
    arry.map( (t)=>{
        blocHTML = blocHTML + '<li class="list-group-item">'+t+'</li>';
    })


    listElement.innerHTML = blocHTML;

}



function search() {
    const query = searchElement.value;

    const res = todos.filter( (t)=> t.indexOf(query) != -1  )

    affichage(res);
}

