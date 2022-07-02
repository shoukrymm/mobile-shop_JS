let productsDiv = document.querySelector(".products");
let cardProductsMenu = document.querySelector(".card-products");
let cardProductsDiv = document.querySelector(".card-products div");
let shoppingIcon = document.querySelector(".shopIcon sup");
let shoppingContainer = document.querySelector(".shopping_card")
let products = JSON.parse(localStorage.getItem('products'));

//display products
let viewMainProducts = function (products = []) {
    let productsUI = products.map((item) => {
        return `
        <td>
                        <div class="item">
                            <a><img class="productImg" src="${item.imgUrl}" width="100%" height="70%" alt=""></a>
                            <a onclick="saveItemData(${item.id})" class="productTitle">${item.title}</a>
                            <h3>${item.rate}</h3>
                            <h3 class="productPrice">EGP <span style="color: brown;">${item.price}</span></h3>
                            <button class="addbtn" onclick="addToCard(${item.id})">Add To Card</button>
                        </div>
                    </td>
        `
    })
    productsDiv.innerHTML = productsUI;
}
viewMainProducts(JSON.parse(localStorage.getItem('products')));


// check items in local storage

let addedItem = localStorage.getItem('productsInCard') ? JSON.parse(localStorage.getItem('productsInCard')) : [];

if (addedItem) {
    addedItem.map((item) => {
        cardProductsDiv.innerHTML += `<p>${item.title} <span style="color: red;">${item.qty}</span></p>`;
    });
    shoppingIcon.innerHTML = addedItem.length;
}

//open card menu
shoppingContainer.addEventListener('click', openCardMenu);


function openCardMenu() {
    if (cardProductsDiv.innerHTML != "") {
        if (cardProductsMenu.style.display == "block") {
            cardProductsMenu.style.display = "none";
        }
        else {
            cardProductsMenu.style.display = "block";
        }
    }
}



// add to card
let allItems = [];
function addToCard(id) {

    if (localStorage.getItem("username")) {
        let selectedItem = products.find((item) => item.id === id);
        // increase the qty in card
        let items = allItems.find(i => i.id === selectedItem.id)
        if (items) {
            selectedItem.qty += 1;
        }
        else {
            allItems.push(selectedItem)
        }

        cardProductsDiv.innerHTML = "";
        allItems.forEach(item => {
            cardProductsDiv.innerHTML += `<p>${item.title} <span style="color: red;">${item.qty}</span></p>`;
        })


        // adding choosed item in local storage
        addedItem = [...addedItem, selectedItem];
        cardItemsArr(addedItem, "id")

        let uniqeProduct = cardItemsArr(addedItem, "id");
        localStorage.setItem('productsInCard', JSON.stringify(uniqeProduct));
        let cardProductsLength = document.querySelectorAll(".card-products div p");
        shoppingIcon.innerHTML = cardProductsLength.length;
    }
    else {
        alert('you need to login to add items in cart');
        window.location = "login.html"
    }
}

function cardItemsArr(arr, id) {
    let uniqe = arr.map((item) => item[id])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item]);

    return (uniqe);
}



// catch id in local storage to send it to details page
function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location = "details.html";
}



// search 

let searchInput = document.getElementById("search");

searchInput.addEventListener('keyup', function (e) {

    search(e.target.value, JSON.parse(localStorage.getItem('products')));


    if (e.target.value.trim() === "") {
        viewMainProducts(JSON.parse(localStorage.getItem('products')));
    }
})

function search(title, myArray) {
    let arr = myArray.filter((item) => item.title.indexOf(title) !== -1);
    viewMainProducts(arr);
}

