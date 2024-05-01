dummyorderslist = [

    {
        orderid:1111,
        image:"images/redmirchi.jpg",
        productname:"redmirchi",
        quantity:2,
        status:"Success",
        orderdate:"12/2/222",
        paymentmode:"UPI"
    },

    {
        orderid:2222,
        image:"images/Kidneybeans.jpg",
        productname:"kidneybeans",
        quantity:1,
        status:"Cancelled",
        orderdate:"13/2/222",
        paymentmode:""
    }

]

function displayOrderslist(){

    let orders_list_container = document.querySelector(".orders-list-container");

    let ordertable = document.createElement('table');

    ordertable.innerHTML = `<tr><th>OrderID</th><th>Image</th><th>Product</th><th>Ordered Date</th><th>Quantity</th><th>Payment mode</th><th>Status</th></tr>`

    dummyorderslist.forEach(order => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${order.orderid}</td>
        <td><img src="${order.image}"></td>
        <td>${order.productname}</td>
        <td>${order.orderdate}</td>
        <td>${order.quantity}</td>
        <td>${order.paymentmode}</td>
        <td>${order.status}</td>
        `


        ordertable.append(row);
    });

    orders_list_container.append(ordertable);

}
window.addEventListener('load',displayOrderslist);