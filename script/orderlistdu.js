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
    //function to display orders----------------------------------------------------------------------
    function displayOrdersList() {

        // if (dummyorderslist.length === 0) {
        //     let no_orders = document.querySelector('.no_orders_display_section');
        //     let orderslist = document.querySelector('.orders_list_container');
        //     no_orders.style.display = 'flex';
        //     orderslist.style.display = 'none';

            
        // } else {
            let orderslist = document.querySelector('.orders_list_container');
            orderslist.style.display = 'flex';
        


            let orders_list_container = document.querySelector(".orders_list_container");
            


                dummyorderslist.forEach((order,index) => {
                    

                let ordersdiv = document.createElement('div');
                ordersdiv.classList.add('orders');

                //order id
                let OrderNumber = document.createElement('h4');
                OrderNumber.classList.add('ordernumber_status')
                OrderNumber.innerHTML = `<p><span>Order Number :<br/></span> ${order.orderid}</p> <p><span>Status :<br/></span> ${order.status}</p>`;
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


                //orderdetails and feedback
                let orderhelp = document.createElement('div')
                orderhelp.classList.add('orderhelp');
            


                //help feedback link
                let help = document.createElement('button');
                help.classList.add('help');
                help.innerHTML = `Help`;
                help.setAttribute('onclick', `help(${index})`);
                orderhelp.appendChild(help);

                //orderdetailsbutton
                let viewdetails = document.createElement('button');
                viewdetails.innerHTML = `Order Details`;
                viewdetails.classList.add('viewdetailsbtn');
                orderhelp.appendChild(viewdetails);


                ordersdiv.appendChild(orderhelp);

                orders_list_container.appendChild(ordersdiv); 
            });
        // }
    }

    displayOrdersList();