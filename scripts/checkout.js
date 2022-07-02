let productsOrderedContatiner = document.getElementById("totalProducts"); 
let numberOfproductsElement = document.getElementById("numberOfProducts"); 
let totalPriceElement = document.getElementById("totalPrice");
let items = JSON.parse(localStorage.getItem("productsInCard")); 



let numberOfProducts = 0;
let totalPrice = 0;
items.forEach((item) => {
    numberOfProducts++;
    totalPrice += parseInt(item.price * item.qty);
    let createdP = document.createElement("p");
    let createdA = document.createElement("a");
    let createdSpan = document.createElement("span");
    createdSpan.setAttribute("class", "price");
    createdA.innerText = item.title;
    createdSpan.innerText = (item.price * item.qty) + " EGP";
    createdP.appendChild(createdA);
    createdP.appendChild(createdSpan);


    productsOrderedContatiner.insertBefore(createdP, productsOrderedContatiner.childNodes[4]);
});

numberOfproductsElement.innerText = numberOfProducts;
totalPriceElement.innerText = totalPrice + " EGP";



