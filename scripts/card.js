let productsDiv = document.querySelector(".card_products");
let totalCardDiv = document.querySelector(".total");
let submitBtn = document.querySelector("submitbtn");

function viewCartProducts(allProducts= []) {

    if(JSON.parse(localStorage.getItem('productsInCard')).length ===0){
        totalCardDiv.innerHTML = "0 Items";
    }
    
    let totalPrice = 0;
    let products = JSON.parse(localStorage.getItem('productsInCard')) || allProducts;
    let productsUI = products.map((item) => {
        totalPrice = item.price*item.qty;
        return `
        <div class="card1"> 
        <img src="${item.imgUrl}" alt="">
        <div class="card-info">
            <h3 class="title">${item.title} <span class="price">${totalPrice} EGP</span> </h3>
            <h3 class="rate">${item.rate}</h3>
            <p class="ship">Usually ships within 2 to 3 days.</p><br>
            <div class="card-footer">
                <input type="number" name="" id="" class="qty" value="${item.qty}">
                <button class="deletebtn" onclick="deleteItemFromCard(${item.id})">Delete</button>
            </div>
            
        </div>
        <hr>
    </div>
        `;
    })
    productsDiv.innerHTML = productsUI;
}
viewCartProducts();

function deleteItemFromCard(id){
    let productsInCard = localStorage.getItem('productsInCard');
    if(productsInCard){
        let items = JSON.parse(productsInCard);

        let filteredItems = items.filter((item)=> item.id !== id);
        viewCartProducts(filteredItems);
        localStorage.setItem('productsInCard', JSON.stringify(filteredItems));
        viewCartProducts(filteredItems);
    }
}


function submitcard(){
    window.location = "checkout.html"
}

// submitBtn.addEventListener('click',submitcard);


