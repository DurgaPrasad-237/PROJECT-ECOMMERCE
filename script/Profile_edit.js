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

//function for password
function openPassword(){
    let display_passwordarea = document.querySelector(".display-passwordarea");
    let profileedit = document.querySelector(".profileedit");
    display_passwordarea.classList.add("openPasswordarea");
    profileedit.style.filter = 'blur(5px)';
}
//function for close password
function closepassword(){
    console.log("hi")
    let display_passwordarea = document.querySelector(".display-passwordarea");
    let profileedit = document.querySelector(".profileedit");
    display_passwordarea.classList.remove("openPasswordarea");
    profileedit.style.filter = 'none';

}


//function for address slider
function openAddress(){
    let profileedit = document.querySelector(".profileedit");
    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    let adddisplay = document.getElementById("adddisplay");

    profileedit.style.filter = 'blur(5px)';
    adddisplay.classList.add("addressdisplay-area-open");
    


    adddisplay.innerHTML = ""; 
    
     // Add close button (x-mark)
     let closebutton = document.createElement("div");
     closebutton.classList.add("close-button");
     closebutton.innerHTML = `<i class="fa-solid fa-xmark" onclick="closeAddress()"></i>`;
     adddisplay.appendChild(closebutton);
 


    addresses.forEach((add,index) =>{
        let displayaddress = document.createElement("div");
        let editandelete = document.createElement("div");
      

        let editbutton = document.createElement("div");
        let deletebutton = document.createElement("div");

        displayaddress.classList.add("displayaddress")
        editandelete.classList.add("editandelete")

        displayaddress.innerHTML = `<p><b>House no: </b>${add.houseNo}</p>
        <p><b>Street: </b>${add.street}</p>
        <p><b>Pincode: </b>${add.pincode}</p>
        <p><b>LandMark: </b>${add.landmark}</p>
        <p><b>Town/City: </b>${add.towncity}</p>
        <p><b>State: </b>${add.state}</p>
        <p><b>Country: </b>${add.country}</p>`;

       
        editbutton.innerHTML = `<i class="fa-solid fa-pen-to-square" onclick="editaddress(${index})"></i>`;
        deletebutton.innerHTML = `<i class="fa-solid fa-trash" onclick="deleteaddress(${index})"></i>`;
     
        adddisplay.appendChild(displayaddress);
        displayaddress.append(editandelete);
        editandelete.append(editbutton);
        editandelete.append(deletebutton);
    });

    
}
//function for closeaddress
function closeAddress(){
    let profileedit = document.querySelector(".profileedit");
    let adddisplay = document.getElementById("adddisplay");

    profileedit.style.filter = 'none';
    adddisplay.classList.remove("addressdisplay-area-open");
}



//function for adding address
function addAddress(event){
    event.preventDefault();
    var houseNo = document.getElementById("houseno").value;
    var street = document.getElementById("street").value;
    var pincode = document.getElementById("pincode").value;
    var landmark = document.getElementById("landmark").value;
    var towncity = document.getElementById("towncity").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var address = {
        houseNo: houseNo,
        street: street,
        pincode: pincode,
        landmark: landmark,
        towncity: towncity,
        state: state,
        country: country
    };

       // Retrieve existing addresses from localStorage or initialize empty array
       var addresses = JSON.parse(localStorage.getItem('addresses')) || [];

       // Add the new address to the array
       addresses.push(address);
   
       // Store the updated addresses array in localStorage
       localStorage.setItem('addresses', JSON.stringify(addresses));
   
       // Display a message or perform any other actions as needed
       window.alert("Address added");
       document.getElementById("addressform").reset();    

}

//function for editaddress
function editaddress(index){
    let profileedit = document.querySelector(".profileedit");
    let adddisplay = document.getElementById("adddisplay");
    profileedit.style.filter = 'none';
    adddisplay.classList.remove("addressdisplay-area-open");

    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    let addressToEdit = addresses[index];

    document.getElementById("houseno").value = addressToEdit.houseNo;
    document.getElementById("street").value = addressToEdit.street;
    document.getElementById("pincode").value = addressToEdit.pincode;
    document.getElementById("landmark").value = addressToEdit.landmark;
    document.getElementById("towncity").value = addressToEdit.towncity;
    document.getElementById("state").value = addressToEdit.state;
    document.getElementById("country").value = addressToEdit.country;
}
//function for deleteaddress
function deleteaddress(index){
    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    addresses.splice(index, 1);
    localStorage.setItem('addresses', JSON.stringify(addresses)); 
    openAddress();
}
