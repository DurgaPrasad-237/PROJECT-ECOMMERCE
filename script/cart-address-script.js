
//function for open address
function openAddressarea(){
    let container_cart = document.querySelector(".container-cart");
    let delivery_address_area = document.querySelector(".delivery-address-area");
    container_cart.style.filter = 'blur(5px)';
    delivery_address_area.classList.add('delivery-address-area-open');
    displayAddress();
}
//function for displayaddress
function displayAddress(){
    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];

    let addresscontainer = document.querySelector('.delivery-address-area');

    // Clear the container
    addresscontainer.innerHTML = `<div class="adddelivery-address" onclick="addadress()">
                            <i class="fa-regular fa-address-book"></i><h4 class="addheading">Add Address</h4></div>`;


    let closebutton = document.createElement("div");
    closebutton.classList.add("close-button");
    closebutton.innerHTML = `<i class="fa-solid fa-xmark" onclick="closeAddressContainer() "></i>`;
    addresscontainer.appendChild(closebutton);

    addresses.forEach((address, index) => {
        // Create a div to represent each address
        let delivery_address = document.createElement('div');
        delivery_address.classList.add('delivery_address');

        let deliverybutton = document.createElement('button');
        deliverybutton.classList.add('deliverybutton');
        deliverybutton.innerHTML = `Delivery Here`

   


        // Populate the div with address details
        delivery_address.innerHTML = `
            <p><b>House No:</b> ${address.houseNo}</p>
            <p><b>Street:</b> ${address.street}</p>
            <p><b>Pincode:</b> ${address.pincode}</p>
            <p><b>Landmark:</b> ${address.landmark}</p>
            <p><b>Town/City:</b> ${address.towncity}</p>
            <p><b>State:</b> ${address.state}</p>
            <p><b>Country:</b> ${address.country}</p>
        `;

        // Append the div to the container
        addresscontainer.appendChild(delivery_address);
        delivery_address.append(deliverybutton);

        //event lister for deliverybutton to store the delivery address
        deliverybutton.addEventListener('click', function() {
            let delivery_address = addresses[index];
            localStorage.setItem('deliveryAddress', JSON.stringify(delivery_address)); 
            window.location.href="checkout.html";
        });

    });

    
}
//function for add address
function addadress(){
    window.location.href="Profile_Edit.html";
}
//function for close address
function closeAddressContainer() {
    let addressContainer = document.querySelector('.delivery-address-area');
    let container_cart = document.querySelector(".container-cart");
    container_cart.style.filter = 'none';
    addressContainer.style.display = 'none';
}
//function for delivery address

