

dummyorderslist = [

    {
        orderid:1234567890,
        items:[
            {
            productname:"mirchi",
            qunatity:2
            },
            {
            productname:"turmeric",
            qunatity:1  
            }
        ],
        productname:"redmirchi",
        quantity:2,
        status:"Delivered",
        orderdate:"12/2/222",
        paymentmode:"UPI",
        price:500
    },

    {
        orderid:2222,
        items:[
            {
            productname:"kidneybeans",
            qunatity:1
            },
        ],
        productname:"kidneybeans",
        quantity:1,
        status:"Shipping",
        orderdate:"13/2/222",
        paymentmode:"",
        price:200
    },
    {
        orderid:2222,
        items:[
            {
            productname:"kidneybeans",
            qunatity:1
            },
        ],
        productname:"kidneybeans",
        quantity:1,
        status:"Cancelled",
        orderdate:"13/2/222",
        paymentmode:"",
        price:200
    },
    {
        orderid:2222,
        items:[
            {
            productname:"kidneybeans",
            qunatity:1
            },
        ],
        productname:"kidneybeans",
        quantity:1,
        status:"Cancelled",
        orderdate:"13/2/222",
        paymentmode:"",
        price:200
    },
    {
        orderid:2222,
        items:[
            {
            productname:"kidneybeans",
            qunatity:1
            },
        ],
        productname:"kidneybeans",
        quantity:1,
        status:"Cancelled",
        orderdate:"13/2/222",
        paymentmode:"",
        price:200
    },
    {
        orderid:2222,
        items:[
            {
            productname:"kidneybeans",
            qunatity:1
            },
        ],
        productname:"kidneybeans",
        quantity:1,
        status:"Cancelled",
        orderdate:"13/2/222",
        paymentmode:"",
        price:200
    }
    

];


//link activate event listner
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.links_section div');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
    displayOrdersList();
});

//function to display orders
function displayOrdersList() {
    let addressescontainer = document.querySelector('.addressescontainer');

    addressescontainer.style.display = 'none';

    if (dummyorderslist.length === 0) {
        let no_orders = document.querySelector('.no_orders_display_section');
        let orderslist = document.querySelector('.orders_list_container');
        no_orders.style.display = 'flex';
        orderslist.style.display = 'none';

        
    } else {
        let orderslist = document.querySelector('.orders_list_container');
        orderslist.style.display = 'flex';
       


        let orders_list_container = document.querySelector(".orders_list_container");


        dummyorderslist.forEach(order => {
            let ordersdiv = document.createElement('div');
            ordersdiv.classList.add('orders');

            //order id
            let OrderNumber = document.createElement('h4');
            OrderNumber.classList.add('ordernumber_status')
            OrderNumber.innerHTML = `<p><span>Order Number :</span> ${order.orderid}</p> <p><span>Status :</span> ${order.status}</p>`;
            ordersdiv.appendChild(OrderNumber); 

            //horizontla line
            let hr = document.createElement('hr'); 
            ordersdiv.appendChild(hr); 

            //items heading
            let ItemsHeading = document.createElement('h4');
            ItemsHeading.classList.add('items');
            ItemsHeading.innerHTML = 'Items'; 
            ordersdiv.appendChild(ItemsHeading); 

            // Create a ul element to list the items
            let itemsList = document.createElement('ul');
            order.items.forEach(item => {
                let listItem = document.createElement('li');
                listItem.textContent = `${item.productname} x ${item.qunatity}`;
                itemsList.appendChild(listItem);
            });

            ordersdiv.appendChild(itemsList);


            //total amount heading
            let toalamount = document.createElement('h4');
            toalamount.classList.add('totalamount');
            toalamount.innerHTML = 'Total Amount';
            ordersdiv.appendChild(toalamount); 

            //price
            let price = document.createElement('p');
            price.innerHTML= `${order.price}`;
            ordersdiv.appendChild(price);

            //orderdate heading
            let orderdate = document.createElement('h4');
            orderdate.classList.add('orderdate');
            orderdate.innerHTML = 'Ordered on';
            ordersdiv.appendChild(orderdate); 
            //date
            let dateon = document.createElement('p');
            dateon.innerHTML= `${order.orderdate}`;
            ordersdiv.appendChild(dateon);

            //orderdetailsbutton
            let viewdetails = document.createElement('button');
            viewdetails.innerHTML = `Order Details`;
            viewdetails.classList.add('viewdetailsbtn');
            ordersdiv.appendChild(viewdetails);




            orders_list_container.appendChild(ordersdiv); 
        });
    }
}



//function for display orders
function displayAddresses() {
    let addressescontainer = document.querySelector('.addressescontainer');
    let orderslist = document.querySelector('.orders_list_container');
    let no_orders = document.querySelector('.no_orders_display_section');

    addressescontainer.style.display = 'flex';
    orderslist.style.display = 'none';
    no_orders.style.display = 'none';
   

    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    
    //Clear existing address blocks before appending new ones
    let addblock = document.createElement('div');
    addblock.classList.add('addaddressblock');
  
    addblock.innerHTML = `<i class="fa-regular fa-address-book"></i><a href="addnewaddress.html">Add Address</a>`
    addressescontainer.innerHTML = '';
    addressescontainer.append(addblock);


    addresses.forEach((address,index) => {
        let addressblock = document.createElement('div'); 
        let editandelete = document.createElement("div");

        let editbutton = document.createElement("div");
        let deletebutton = document.createElement("div");

        addressblock.classList.add('addressblock');
        editandelete.classList.add("editandelete")

        addressblock.innerHTML = `<p><Strong>${address.fullname}</Strong></p><p><span>House no: </span>${address.houseno}</p>\n<p>${address.street}, ${address.city}</p>
        \n<p><span>Landmark: </span>${address.landmark}</p>\n<p><span>Pincode: </span>${address.pincode}</p>
        \n<p>${address.state}, ${address.country}</p>\n<p><span>Mobileno:</span> ${address.mobileno}</p>`;

        editbutton.innerHTML = `<i class="fa-solid fa-pen-to-square" onclick="editaddress(${index})"></i>`;
        deletebutton.innerHTML = `<i class="fa-solid fa-trash" onclick="deleteaddress(${index})"></i>`;

        addressblock.appendChild(editandelete);
        editandelete.appendChild(editbutton);
        editandelete.appendChild(deletebutton);
        addressescontainer.append(addressblock);
    }); 
}
//function to open the deleteaddress
function deleteaddress(index) {
    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    
    if (index >= 0 && index < addresses.length) {
        addresses.splice(index, 1); // Remove the address at the specified index
        localStorage.setItem('addresses', JSON.stringify(addresses)); // Update local storage
        displayAddresses(); // Refresh the displayed addresses
    } else {
        console.error('Invalid index for address deletion.');
    }
}

//function for to open changepassword
function changepassword(){
    let container = document.querySelector('.container');
    container.style.filter = 'blur(5px)'; 
    let passwordarea = document.querySelector('.passwordarea');
    passwordarea.style.display = 'flex';

   
}
//closepass
function closepass(){
    let passwordarea = document.querySelector('.passwordarea');
    passwordarea.style.display = 'none';
    let container = document.querySelector('.container');
    container.style.filter = 'none'; 
}
//show currpass
function currpass(){
    let currentinput = document.querySelector('.current-input');
    let curr = document.querySelector('.curr')
    if(currentinput.type == 'password'){
        currentinput.type = "text";
        curr.style.color = "red";
        curr.classList.remove('fa-eye');
        curr.classList.add('fa-eye-slash');
    }
    else{
        currentinput.type = "password";
        curr.classList.add('fa-eye');
        curr.classList.remove('fa-eye-slash');
        curr.style.color = "#83AE45";
    }
}
//show newpass
function newpass(){
    let newinput = document.querySelector(".new-input");
    let newpass = document.querySelector('.new')
    if(newinput.type == 'password'){
        newinput.type = "text";
        newpass.style.color = "red";
        newpass.classList.remove('fa-eye');
        newpass.classList.add('fa-eye-slash');
    }
    else{
        newinput.type = "password";
        newpass.classList.add('fa-eye');
        newpass.classList.remove('fa-eye-slash');
        newpass.style.color = "#83AE45";
    }
}
//show confim pass
function confirmpass(){
    let confinput = document.querySelector(".conf-input");
    let conf = document.querySelector('.conf')
    if(confinput.type == 'password'){
        confinput.type = "text";
        conf.style.color = "red";
        conf.classList.remove('fa-eye');
        conf.classList.add('fa-eye-slash');
    }
    else{
        confinput.type = "password";
        conf.classList.add('fa-eye');
        conf.classList.remove('fa-eye-slash');
        conf.style.color = "#83AE45";
    }
}

//function of passcheck
function checkPasswordMatch() {
    var newPassword = document.querySelector(".new-input").value;
        var confirmPassword = document.querySelector(".conf-input").value;
        var checking = document.querySelector(".checking");

       if(confirmPassword !== newPassword){
        checking.style.color = "red";
            checking.textContent = "Password does not match";
       }
       else{
        checking.style.color = "green";
        checking.textContent = "Password Matched";
       }
}
//profile change function
function profileimagechange(){
    let profileimg = document.querySelector(".profileimage");
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
//function for updateprofile


function editprofile() {
    let userinput = document.querySelector('.userinput');
    let mobileinput = document.querySelector('.mobileinput');

    // Enable input fields
    userinput.removeAttribute('disabled');
    mobileinput.removeAttribute('disabled');

    // Focus on the username input field
    userinput.focus();

 
  
    // Show the submit button
    let submitinfo = document.getElementById("submitinfo");
    submitinfo.style.display = 'block';


    submitinfo.addEventListener("click",function(event){
        event.preventDefault();
        window.alert("updated");
        submitinfo.style.display = 'none';
        userinput.setAttribute('disabled', 'true');
        mobileinput.setAttribute('disabled', 'true');
    })
}








window.addEventListener("load",displayOrdersList);




