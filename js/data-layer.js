var environmentUrl = "http://localhost:57041";

var DL = {

    getProducts: function () {

        var data = [];

        data.push({
            'id': '1',
            'productname': 'Mpesu Capsules',
            'default_price': '75.00',
            'added': false,
            'quantity': 1,
            'picture': 'images/mpesu/capsules.png',
            'cart_pic': 'images/mpesu/cart_capsules.png',
            'instructions': 'For best results ensure you have cleaned your system using one of the cleaning products (e,g Stametta). Take (4) four tablets 5hours before action',
            'price': '75.00',
            'description': '(Mini Pack) 12 Capsules',
            'outofstock': false,
            'products': [
                {
                    'description': '(Mini Pack) 12 Capsules',
                    'price': '75.00'
                }, {
                    'description': '(Mid Pack) 30 Capsules',
                    'price': '150.00'
                },
                {
                    'description': ' (Boza Pack) 100 Capsules',
                    'price': '500.00'
                }
            ]
        },
            {
                'id': '2',
                'productname': 'Mpesu Powder',
                'default_price': '75.00',
                'added': false,
                'quantity': 1,
                'picture': 'images/mpesu/powder.png',
                'cart_pic': 'images/mpesu/cart_powder.png',
                'instructions': 'For best results ensure you have cleaned your system using one of the cleaning products (e,g Stametta). Take (4) four tablets 5hours before action',
                'description': 'For best results ensure you have cleaned your system using one of the cleaning products (e,g Stametta). Use one teaspoon into 500ml of mageu, shake it well and consume 5 hours before action',
                'disclaimer': '',
                'price': '75.00',
                'outofstock': false,
                'products': [
                    {
                        'description': '(Mini Pack) 1 Sachet',
                        'price': '75.00'
                    }, {
                        'description': '(Mid Pack) 3 Sachet',
                        'price': '150.00'
                    },
                    {
                        'description': '(Boza Pack) 12 Sachet',
                        'price': '500.00'
                    }
                ]
            },
            {
                'id': '3',
                'productname': 'Mondia Whitei Capsules',
                'default_price': '150.00',
                'added': false,
                'quantity': 1,
                'picture': 'images/mpesu/mondia.png',
                'cart_pic': 'images/mpesu/mondia.png',
                'instructions': 'For best results ensure you have cleaned your system using one of the cleaning products (e,g Stametta). Take (4) four tablets 5hours before action',
                'disclaimer': '',
                'description': 'For best results ensure you have cleaned your system using one of the cleaning products (e,g Stametta). Use one teaspoon into 500ml of mageu, shake it well and consume 5 hours before action',
                'price': '150.00',
                'outofstock': true,
                'products': [

                    {
                        'description': '(Mid Pack) 30 Capsules',
                        'price': '150.00'
                    }
                ]
            }
        );

        return data;
    },

    getDeliveryPrices: function () {
        var data = [];
        data.push({
            'province_name': 'Gauteng',
            'province_code': 'GP',
            'amount': '100.00'

        }),
            data.push({
                'province_name': 'All',
                'province_code': 'Others',
                'amount': '110.00'
            });

        return data;

    },

    getDeliveryMethods: function () {

        var data = [
            {
                'deliverycode': 'pep',
                'name': 'Pep Paxi (Deliveried in 7-9 days)',
                'price': '50.00',
                'description': 'Usually takes 7-9 days and can be collected from the provided pepstore',
                'instructions': 'Please enter location name of mall or complex of where the pep store is located'
            },
            {
                'deliverycode': 'postnet',
                'name': 'PostNet (Delivered in 2-4 days)',
                'price': '99.00',
                'description': 'Takes 2-3 days and is collected on the provided postnet branch',
                'instructions': 'Please enter location name of mall or complex of where the postnet store is located'

            },
            {
                'deliverycode': 'handtohand',
                'name': 'Hand to hand (Delivered in 2-5 days)',
                'price': '110.00',
                'description': 'Takes 2-5 days working day and is delivered to your named address',
                'instructions': ''
            }
        ];

        return data;
    },

    getPaymentMethods: function () {

        var data = [
            {
                'paymentcode': 'card',
                'name': 'Card Payment,Instant EFT (Payfast)',
                'details': 'You will be redirect to payfast page to continue with payment',
                'note': 'After payment your products will be packed immidiately and deliveried to you'
            },
            {
                'paymentcode': 'cashsend',
                'name': 'Cash Send,Ewallet, Instant Money, Capitec transfer,Bank Deposit',
                'details': 'Cash Send ,Ewallet,Instant Money ,Capitec transfer are all welcomed to the following No :076 182 3476Account Name : Muthwaks Solutions<br/>Bank: First National Bank(FNB)<br/>Account Number: 6259 420 7188<br/>Branch Code: 250455<br/>Reference: Refernce No',
                'note': 'For Cellphone banking confirm by either calling/whatsapping 076 182 3476'
            },
            //{
            //    'paymentcode': 'account',
            //    'name': 'Account Transfer (EFT)',
            //    'details': 'Account Name : Muthwaks Solutions<br/>Bank: First National Bank(FNB)<br/>Account Number: 6259 420 7188<br/>Branch Code: 250455<br/>Reference: Refernce No',
            //    'note': 'For all EFT paymemts sent your Proof of Payment to info@afriheals.co.za or whatsapp to 076 182 3476'

            //}

        ];
        return data;
    },

    paymentURL: function (cartModel, successFn) {
        var cartModelfn = ProcessModel(cartModel);
        $.ajax({
            url: environmentUrl + '/api/Main/GetPaymentUrl',        
            type: "POST",
            data: JSON.stringify(cartModelfn),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                if (data.status) {
                    window.location = data.data;               
                } else {
                    Swal.fire("An error has occured", "Order not placed", "error");
                }
            },
            error: function (data, status, headers, config) {
                Swal.fire("An error has occured", "Order not placed", "error");
                console.log(data);
            }
        });
    },

    processOrder: function (cartModel, successFn) {

        var cartModelfn = ProcessModel(cartModel);

        $.ajax({
            url: environmentUrl + '/api/Main/ProcessOrder',         
            type: "POST",
            data: JSON.stringify(cartModelfn),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                if (data.status) {
                    successFn(data);
                } else {
                    Swal.fire("An error has occured", "Order not placed", "error");
                }
            },
            error: function (data, status, headers, config) {
                Swal.fire("An error has occured", "Order not placed", "error");
                console.log(data);

            }
        });
    },

    sendInvoiceEmail: function (cartModel, successFn) {

        var cartModelfn = ProcessModel(cartModel);

        $.ajax({
            url: environmentUrl + '/api/Main/SendInvoiceEmail',      
            type: "POST",
            data: JSON.stringify(cartModelfn),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                if (data.status) {
                    successFn(data);
                } else {
                    Swal.fire("An error has occured", "Order not placed", "error");
                }
            },
            error: function (data, status, headers, config) {
                Swal.fire("An error has occured", "Order not placed", "error");
                console.log(data);

            }
        });
    }

};

function ProcessModel(cartModel) {

    var orderproduct = [];

    ko.utils.arrayForEach(cartModel.cartlist, function (data) {
        var model = {
            fk_order_id: 0,
            fk_product_id: data.id,
            productname: data.productname,
            price: data.price,
            quantity: data.quantity,
            totalprice: parseFloat(data.price * data.quantity)
        };
        orderproduct.push(model);
    });

    var cartModelfn = {

        grand_total: cartModel.grand_total,
        delivery: cartModel.delivery,
        delivery_price: cartModel.delivery_price,
        delivery_method: cartModel.delivery_method,
        province: cartModel.province,
        final_total: cartModel.final_total,
        names: cartModel.names,
        contact_no: cartModel.contact_no,
        email: cartModel.email,
        referenceno: cartModel.referenceno,
        paymentmethod: cartModel.paymentmethod,
        physical_address: cartModel.physical_address,
        physical_address_two: cartModel.physical_address_two,
        postalcode: cartModel.postalcode,
        city: cartModel.city,
        postnetstore: cartModel.postnetstore,
        pepstore: cartModel.pepstore,
        status: cartModel.status,
        cartlist: orderproduct
    };
    return cartModelfn;
}