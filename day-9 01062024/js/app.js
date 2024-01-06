var listBTNElement = document.getElementById('list-btn');
var gridBTNElement = document.getElementById('grid-btn');
var listElement = document.getElementById('list');
var categoryElement = document.getElementById('category');
var priceElement = document.getElementById('price');

var displayMode = 0;


var categories = [
    { id:1 , name:'TV' },
    { id:2 , name:'Sports' },
    { id:3 , name:'Electronics' }
];

var products = [
    {
      title: "Product 1",
      price: 19.99,
      category: "TV",
      categoryID:1, 
      photoURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Product 2",
      price: 29.99,
      category: "TV",
      categoryID:1, 
      photoURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Product 3",
      price: 14.99,
      category: "Sports",
      categoryID:2, 
      photoURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      title: "Product 4",
      price: 39.99,
      category: "Sports",
      categoryID:2, 
      photoURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Product 5",
      price: 49.99,
      category: "TV",
      categoryID:1, 
      photoURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      title: "Product 6",
      price: 24.99,
      category: "TV",
      categoryID:1, 
      photoURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487406_sd.jpg",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
  ];
  


listBTNElement.addEventListener('click',function(){
    listBTNElement.className='btn btn-primary';
    gridBTNElement.className='btn btn-outline-primary';
    displayMode = 0;
    showData();

})

gridBTNElement.addEventListener('click',function(){
    gridBTNElement.className='btn btn-primary';
    listBTNElement.className='btn btn-outline-primary';
    displayMode = 1;
    showData();
})


document.getElementById('query').addEventListener('keyup',function(){
    showData();
})


categoryElement.addEventListener("change",function(){
    showData();
})


priceElement.addEventListener('change',function(){
    const value = Number(priceElement.value);
    

    const chosenPrice = (value * getMaxPrice() ) / 100;


    console.log(chosenPrice);

    document.getElementById('label-price').innerHTML = chosenPrice+'$';


    showData();

    
})



function getMaxPrice(){
    let max = 0;
    products.map((p)=>{
        if( p.price > max){
            max = p.price;
        }
    })

    return max;
}




// affichage !!
// if dispplayMode == 0 => ...

function showData(){

    let blocHTML = '';
    
    const motCle = document.getElementById('query').value;
    const categoryID = categoryElement.value;  
    const value = Number(priceElement.value); 
    const chosenPrice = (value * getMaxPrice() ) / 100;
 
    products.filter( (p) => ( p.title.toLowerCase().indexOf( motCle.toLowerCase() ) != -1 ) && ( p.categoryID == categoryID ) && ( p.price <= chosenPrice )   )  
    
    
    .map((p)=>{
        if (displayMode == 0) {
            blocHTML = blocHTML + `
            <div class="col-12 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div style="width: 250px; margin-right: 25px;">
                                <img src="${p.photoURL}" class="w-100" alt="">
                            </div>
                            <div>
                                <h3>${p.title}</h3>
                                <p class="text-muted">${p.price}$</p>
                                <p class="text-muted">${p.category}</p>
                                <p class="text-muted">${p.description}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        } else {
            blocHTML = blocHTML + `<div class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <img src="${p.photoURL}" class="w-100" alt="">
                    
                    <h3>${p.title}</h3>
                    <p class="text-muted">${p.price}$</p>
                    <p class="text-muted">${p.category}</p>
                </div>
            </div>
        </div>`;
        }
    })


    listElement.innerHTML = blocHTML;
}



function initCategoryList(){
    let blocHTML = '';

    categories.map((c)=>{
        blocHTML = blocHTML + `<option value="${c.id}">${c.name}</option>`;
    })

    categoryElement.innerHTML = blocHTML;
}





// INIT
initCategoryList();
showData();


