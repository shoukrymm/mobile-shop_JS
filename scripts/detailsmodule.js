import {products,productId,itemDiv} from './detailsdom.js'

let productDetails = products.find((item) => item.id == productId);

itemDiv.innerHTML = `
    <div class="images">
    <img class="img1" src="${productDetails.imgUrl}" alt="">
    </div>

    <div class="disc">
    <h2>${productDetails.title}</h2>
    <h3>Rating :</h3>
    <p>${productDetails.rate}</p>
    <hr>

    <h3 class="price">Price : ${productDetails.price} <span>EGP</span> </h3> <br>
    <h5 class="vat">All Prices Include VAT</h5>

    <a href="index.html"><button>Check More Products</button></a>

    </div>
    `;
