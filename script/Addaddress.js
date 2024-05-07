//function to add address
document.getElementById("address").addEventListener("click",function(event){
    event.preventDefault();
    
    let houseno = document.getElementById("houseno").value;
    let street = document.getElementById("street").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let fullname = document.getElementById("fullname").value;
    let mobileno = document.getElementById("mobilenumber").value;
    let pincode = document.getElementById("pincode").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("towncity").value;
    
    let address = {
        houseno:houseno,
        street:street,
        country:country,
        state:state,
        fullname:fullname,
        mobileno:mobileno, 
        pincode:pincode,
        landmark:landmark,
        city:city
    }
    var addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    addresses.push(address);
    localStorage.setItem("addresses",JSON.stringify(addresses));
    window.alert("Your address is added");
    document.getElementById("address").reset();
    console.log(address);


 })

 //function to edit addresss
