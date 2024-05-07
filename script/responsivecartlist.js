// function for responsive navbar
function navBarToggle(){
    // let hamburg = document.getElementById("hamburg");
    let navlinkscontainer = document.querySelector(".nav-links-container");


    let expandnav = document.getElementById("expandnav");
    expandnav.classList.toggle("expand-navbar-open");

    hamburg.innerHTML = expandnav.classList.contains("expand-navbar-open") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    navlinkscontainer.style.display = expandnav.classList.contains("expand-navbar-open") ? "flex" : "none";
   
}


//function for displaycartiteme

function displaycartitems(){
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));
 

    if(cartlist.length != 0){
        let cartsection = document.querySelector('.cartsection');
        cartsection.style.display = "block";
        let emptycart = document.getElementById("emptycart");
        emptycart.style.display = "none";
         

        let tablebody = document.querySelector('.carttable');
        tablebody.innerHTML = '';
        let subtotalPrice = 0; 
        let shippingcost = 0;
        let totalprice = 0;
        cartlist.forEach(item => {
            let row = document.createElement("tr");
            let itemTotalPrice = item.price * item.quantity;
            subtotalPrice += itemTotalPrice; 
            totalprice = subtotalPrice + shippingcost;
            row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>
                <p>${item.name}</p>
                <div>
                    <button onclick="decreaseQuantity('${item.id}')">-</button>
                    <p>${item.quantity}</p>
                    <button onclick="increaseQuantity('${item.id}')">+</button>
                </div>
                <p>${itemTotalPrice}</p>
            </td>
            <td>
                <i class="fa-solid fa-trash"  onclick="deleteItemFromCart('${item.id}')"></i>
            </td>  
            `;
            tablebody.appendChild(row);
        })
        let billingarea = document.querySelector('.billing');
        billingarea.innerHTML = '';
        let subtotal = document.createElement("p");
        subtotal.innerHTML = `<b>Sub Total:</b> ${subtotalPrice}`;
        billingarea.append(subtotal);
        localStorage.setItem("subtotalPrice", JSON.stringify(subtotalPrice));
        let checkout = document.createElement("button");
        checkout.innerHTML = `Procced to Buy`;
        billingarea.append(checkout);
    }

    else{
        let cartsection = document.querySelector('.cartsection');
        cartsection.style.display = "none";
        let emptycart = document.getElementById("emptycart");
        emptycart.style.display = "flex";
       
      
   
     }
}
displaycartitems();


// Function to increase quantity of a product
function increaseQuantity(productId) {
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));
    let productIndex = cartlist.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cartlist[productIndex].quantity++; 
        localStorage.setItem('cartlist', JSON.stringify(cartlist));
        displaycartitems(); 
    }
}

// Function to decrease quantity of a product
function decreaseQuantity(productId) {
    let cartlist = JSON.parse(localStorage.getItem('cartlist'));
    let productIndex = cartlist.findIndex(item => item.id === productId);
    if (productIndex !== -1 && cartlist[productIndex].quantity > 1) {
        cartlist[productIndex].quantity--; 
        localStorage.setItem('cartlist', JSON.stringify(cartlist)); 
        displaycartitems(); 
    }
}


// Function to delete an item from the cart
function deleteItemFromCart(productId) {
    let cartlist = JSON.parse(localStorage.getItem('cartlist')); 
    let updatedCartlist = cartlist.filter(item => item.id !== productId);
    localStorage.setItem('cartlist', JSON.stringify(updatedCartlist)); 
    displaycartitems(); 
}