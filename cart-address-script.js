function cartAddressOpen(){
let addressarea = document.getElementById("address-area");
addressarea.classList.add("cart-address-open");
}
function closeCartaddressarea(){
    let addressarea = document.getElementById("address-area");
    addressarea.classList.remove("cart-address-open");
}

// Function to add address to local storage
function addAddress() {
    var addressInput = document.getElementById("addressInput").value;
    var addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    addresses.unshift(addressInput);
    localStorage.setItem("addresses", JSON.stringify(addresses));
    document.getElementById("addressInput").value = ""; 
    displayAddresses();
}

// Function to display all addresses
function displayAddresses() {
    var addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    var displayAddress = document.getElementById("displayAddress");
    displayAddress.innerHTML = "";
    addresses.forEach(function(address, index) {
        var formattedAddress = address.replace(/\n/g, "<br>");
        var addressDiv = document.createElement("div");
        addressDiv.classList.add("address");
        addressDiv.innerHTML = formattedAddress;
        
        // Container for buttons
        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        
        // Add edit button
        var deliverybutton = document.createElement("button");
        deliverybutton.innerText = "Delivery here";
        deliverybutton.classList.add("delivery-button"); // Add edit button class
        deliverybutton.addEventListener("click", function() {
            deliveryAddress(index);
        });
        buttonContainer.appendChild(deliverybutton);
        
        
        addressDiv.appendChild(buttonContainer); // Add button container to address div
        
        displayAddress.appendChild(addressDiv);
    });
}

// Function to edit an address
function deliveryAddress(index) {
    var addresses = JSON.parse(localStorage.getItem("addresses"));
    var deliveryAddress = addresses[index];
    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));
    window.location.href = 'checkout.html';
}


// Add event listener to the Add Address button
document.getElementById("addAddressButton").addEventListener("click", addAddress);

// Display addresses when the page loads
window.addEventListener("load", displayAddresses);
