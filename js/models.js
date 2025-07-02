var models = {

    cartFn: function () {
        var self = this;

        self.cartlist = ko.observableArray();
        self.grand_total = ko.observable();
        self.delivery = ko.observable('');
        self.delivery_price = ko.observable();
        self.errors = ko.observable();
        self.province = ko.observable('').extend({ required: true});
        self.final_total = ko.observable();
        self.delivery_method = ko.observable().extend({ required: true });     
        self.names = ko.observable().extend({
            required: true
        });
        self.contact_no = ko.observable().extend({
            required: true
        });
        self.show_errors = ko.observable(false);
        self.email = ko.observable().extend({
            required: {
               // message: 'Email Required',
                params: ' /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
            }
        });
        self.referenceno = ko.observable();
        self.paymentmethod = ko.observable().extend({ required: true });     
        self.physical_address_two = ko.observable();
        self.physical_address = ko.observable().extend({
            required: {
                onlyIf: function () {
                    return self.delivery_method() == "handtohand";
                }
            }        
        });
        self.postalcode = ko.observable().extend({
            required: {
                onlyIf: function () {
                    return self.delivery_method() == "handtohand";
                }
            }        
        });
        self.city = ko.observable().extend({
            required: {
                onlyIf: function () {
                    return self.delivery_method() == "handtohand";
                }
            }        
        });
        self.is_valid = ko.computed(function () {
         
            var errors = ko.validation.group(self, { deep: true });
            console.log(errors());
            self.errors(errors().length);
          
        });
        self.delivery_methods = ko.observableArray([]);
        self.paymentmethods = ko.observableArray([]);
      

        self.pepstore = ko.observable().extend({
            required: {
                onlyIf: function () {
                    return self.delivery_method() == "pep";
                }
            }        
        });
        self.postnetstore = ko.observable().extend({
            required: {
                onlyIf: function () {
                    return self.delivery_method() == "postnet";
                }
            }        
        });
        self.delivery_note = ko.observable();
        self.status = ko.observable(1);
        //self.place_order = function () {
           
        //    console.log("This has came here");
        //};
        //self.removefromcart = function () {
        //    debugger;
        //    console.log("This has came here");
        //    debugger;
        //};
        return self;


    }


}
