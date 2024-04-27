// carlist count
let cart_list = document.getElementById("cartlistcount");


// function for responsive navbar
function navBarToggle(){
    // let hamburg = document.getElementById("hamburg");
    let navlinkscontainer = document.querySelector(".nav-links-container");


    let expandnav = document.getElementById("expandnav");
    expandnav.classList.toggle("expand-navbar-open");

    hamburg.innerHTML = expandnav.classList.contains("expand-navbar-open") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    navlinkscontainer.style.display = expandnav.classList.contains("expand-navbar-open") ? "flex" : "none";
   
}


// Function to toggle the submenu visibility
function toggleMenu(event) { 
    event.preventDefault();
    let submenuWrap = document.querySelector(".sub-menu-wrap");
    submenuWrap.classList.toggle("open-menu");
}



// Function to add product to cart
function addToCart(button) {
    let productCard = button.parentElement;
    let product = {
        id: productCard.querySelector(".pId").innerText,
        image: productCard.querySelector(".product-image-container img").src,
        name: productCard.querySelector("h4").innerText,
        description: productCard.querySelector(".desc").innerText,
        price: parseInt(productCard.querySelector(".price-quantity p:nth-child(1) span").innerText),
        quantityAvailable: parseInt(productCard.querySelector(".price-quantity p:nth-child(2) span").innerText),
        quantity: 1 
    };
   
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));

    if (!Array.isArray(cartlist)) {
        cartlist = [];
    }

    let existingProductIndex = cartlist.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
 
        cartlist[existingProductIndex].quantity++;
    } else {
   
        cartlist.push(product);
    }

 
    localStorage.setItem('cartlist', JSON.stringify(cartlist)); 
    countCartItems();

}

//function for  count the list of items in cart
function countCartItems(){
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));
    let length = cartlist.length;
    cart_list.innerText = length;
}



//function display cartitems

function displayCartItems(){
    let cartlist = JSON.parse(localStorage.getItem('cartlist')); 


    if(cartlist.length != 0){
        let cartcontainer = document.getElementById("cart-container");
        cartcontainer.style.display = "flex";
        let emptycart = document.getElementById("emptycart");
        emptycart.style.display = "none";
        

    let tableBody = document.querySelector(".container-cart .cartlistarea table");
    tableBody.innerHTML = '';
    let subtotalPrice = 0; 
    let shippingcost = 0;
    let totalprice = 0;

    tableBody.innerHTML = `<tr><th></th><th>ProductName</th><th>Quantity</th><th>Price</th><th></th></tr>`;
    cartlist.forEach(item => {
        let row = document.createElement("tr");
        let itemTotalPrice = item.price * item.quantity;
        subtotalPrice += itemTotalPrice; 
        totalprice = subtotalPrice + shippingcost;
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td class="quantity">
                <button class="decreasebtn" onclick="decreaseQuantity('${item.id}')">-</button>
                <span class="itemquntity">${item.quantity}</span>
                <button class="increasebtn" onclick="increaseQuantity('${item.id}')">+</button>
            </td>
            <td>${itemTotalPrice}</td>
            <td><button class="removebtn" onclick="deleteItemFromCart('${item.id}')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });

    let billingarea = document.querySelector('.billingarea');
    billingarea.innerHTML = '';
    //subtoal
    let subtotal = document.createElement("div");
    subtotal.innerHTML = `<h4 class="billing-sideheading">Sub total:</h4><p class="sub-price">${subtotalPrice}</p>`
    billingarea.append(subtotal);
    localStorage.setItem("subtotalPrice", JSON.stringify(subtotalPrice));
    //shipping
    let shipping = document.createElement("div");
    shipping.innerHTML = `<h4 class="billing-sideheading">Shipping:</h4><p class="sub-price">${shippingcost}</p>`
    billingarea.append(shipping);
    localStorage.setItem("shippingcost", JSON.stringify(shippingcost));

    //line between shipping and total
    let line = document.createElement("hr");
    billingarea.append(line);

    //total amount
    let totalamount = document.createElement("div");
    totalamount.innerHTML = `<h4 class="billing-sideheading">Total Amount   :</h4><p class="sub-price">${totalprice}</p>`
    billingarea.append(totalamount);    
    localStorage.setItem("totalprice", JSON.stringify(totalprice));

    //proceed to checkout
    let checkout = document.createElement("div");
    checkout.innerHTML = `<a class="proceedbtn" onclick="cartAddressOpen()">Proceed to Buy</a>`;
    billingarea.appendChild(checkout);

}
//if cart list is empty
else{
   let cartcontainer = document.getElementById("cart-container");
   cartcontainer.style.display = "none";
   let emptycart = document.getElementById("emptycart");
   emptycart.style.display = "flex";
}


    countCartItems();
    
}


// Function to increase quantity of a product
function increaseQuantity(productId) {
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));
    let productIndex = cartlist.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cartlist[productIndex].quantity++; 
        localStorage.setItem('cartlist', JSON.stringify(cartlist));
        displayCartItems(); 
    }
}
// Function to decrease quantity of a product
function decreaseQuantity(productId) {
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));
    let productIndex = cartlist.findIndex(item => item.id === productId);
    if (productIndex !== -1 && cartlist[productIndex].quantity > 1) {
        cartlist[productIndex].quantity--; 
        localStorage.setItem('cartlist', JSON.stringify(cartlist)); 
        displayCartItems(); 
    }
}
// Function to delete an item from the cart
function deleteItemFromCart(productId) {
    let cartlist = JSON.parse(localStorage.getItem('cartlist')); 
    let updatedCartlist = cartlist.filter(item => item.id !== productId);
    localStorage.setItem('cartlist', JSON.stringify(updatedCartlist)); 
    displayCartItems(); 
}



if (window.location.pathname.endsWith("cartlist.html")) {
    window.onload = displayCartItems;
}
else{
    window.onload = countCartItems;
}

