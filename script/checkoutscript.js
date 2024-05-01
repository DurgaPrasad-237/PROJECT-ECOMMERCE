function customerAddress() {
    console.log("hi");
    var deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
    let demo = document.getElementById("demo");
    demo.innerText = "House no: "+deliveryAddress.houseNo+"\n Street: "+deliveryAddress.street+"\n Town|city: "+deliveryAddress.towncity
    +"\n pincode: "+deliveryAddress.pincode+"\n state: "+deliveryAddress.state+"\n Country: "+deliveryAddress.country;
}
customerAddress();

function orderSummary(){
    var totalamount = JSON.parse(localStorage.getItem("totalprice"));
    var shipping = JSON.parse(localStorage.getItem("shippingcost"));
    var subtotal = JSON.parse(localStorage.getItem("subtotalPrice"));

    let demo2  = document.getElementById("demo2");
    let demo3 = document.getElementById("demo3");
    let demo4 = document.getElementById("demo4");

    demo2.innerText = subtotal;
    demo3.innerText = shipping;
    demo4.innerText = totalamount;
}
orderSummary();

function changeAddress(){
    window.location.href = "cartlist.html";
}