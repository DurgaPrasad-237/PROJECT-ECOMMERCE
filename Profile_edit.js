let profileimg = document.getElementById("profileimg");
//function of porfileimage change
function profileimagechange() {
    let inputelement = document.createElement("input");
    inputelement.type = "file";
    inputelement.addEventListener('change', function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            const selectedFile = files[0];
            const profileimageurl = URL.createObjectURL(selectedFile);   
            profileimg.src = profileimageurl;
        }
    });
    inputelement.click();
}

//function for passwordchange slider
function passwordChange(){
    let passwordarea = document.getElementById("passarea");
    let currentpassinput = document.getElementById("currentpassinput");
    let newpassinput = document.getElementById("newpassinput");
    let showconfirmpassword= document.getElementById("showconfirmpassword");
    currentpassinput.value = "";
    newpassinput.value = "";
    showconfirmpassword.value="";
    passwordarea.classList.add("open-passwordarea");
}
//function for password change close
function closepassaera(){
    let passwordarea = document.getElementById("passarea");
    passwordarea.classList.remove("open-passwordarea");

}

//function for viewcurrentpassword
function viewcurrentpassword() {
    let currentpassinput = document.getElementById("currentpassinput");
    let showcurrentpassword = document.getElementById("showcurrentpassword");
    if (currentpassinput.type === "password") {
        currentpassinput.type = "text";
        showcurrentpassword.innerText = "Hide";
        showcurrentpassword.style.color = "red";
    } else {
        currentpassinput.type = "password";
        showcurrentpassword.innerText = "Show";
        showcurrentpassword.style.color = "#83AE45";
    }
}
//function for viewnewpassword
function viewnewpassword() {
    let newpassinput = document.getElementById("newpassinput");
    let shownewpassword = document.getElementById("shownewpassword");

    if (newpassinput.type === "password") {
        newpassinput.type = "text";
        shownewpassword.innerText = "Hide";
        shownewpassword.style.color = "red";
    } else {
        newpassinput.type = "password";
        shownewpassword.innerText = "Show";
        shownewpassword.style.color = "#83AE45";
    }
}
//function for viewconfirmpassword
function viewconfirmpassword() {
    let confirmpassinput = document.getElementById("confirmpassinput");
    let showconfirmpassword = document.getElementById("showconfirmpassword");

    if (confirmpassinput.type === "password") {
        confirmpassinput.type = "text";
        showconfirmpassword.innerText = "Hide";
        showconfirmpassword.style.color = "red";
    } else {
        confirmpassinput.type = "password";
        showconfirmpassword.innerText = "Show";
        showconfirmpassword.style.color = "#83AE45";
    }
}
//function for address slider
function openAddress(){
    let addressarea = document.getElementById("address-area");
    addressarea.classList.add("addressarea-open");
}
//function for address area close
function closeaddressarea(){
    let addressarea = document.getElementById("address-area");
    addressarea.classList.remove("addressarea-open");
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
        var editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("edit-button"); // Add edit button class
        editButton.addEventListener("click", function() {
            editAddress(index);
        });
        buttonContainer.appendChild(editButton);
        
        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button"); // Add delete button class
        deleteButton.addEventListener("click", function() {
            deleteAddress(index);
        });
        buttonContainer.appendChild(deleteButton);
        
        addressDiv.appendChild(buttonContainer); // Add button container to address div
        
        displayAddress.appendChild(addressDiv);
    });
}

// Function to edit an address
function editAddress(index) {
    var addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    var addressToEdit = addresses[index];
    var addressInput = document.getElementById("addressInput");
    addressInput.value = addressToEdit;
    addressInput.focus();
    // Remove the previous address from the array
    addresses.splice(index, 1);
    localStorage.setItem("addresses", JSON.stringify(addresses));
    displayAddresses();
}

// Function to delete an address
function deleteAddress(index) {
    var addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    addresses.splice(index, 1);
    localStorage.setItem("addresses", JSON.stringify(addresses));
    displayAddresses();
}

// Add event listener to the Add Address button
document.getElementById("addAddressButton").addEventListener("click", addAddress);

// Display addresses when the page loads
window.addEventListener("load", displayAddresses);

