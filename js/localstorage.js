mylocalstorage = {

    getcarts: function () {
        return window.localStorage.getItem('cartmodel') == undefined ? undefined : $.parseJSON(window.localStorage.getItem('cartmodel'), true);
    },
    setcart: function (cartmodel) {
        window.localStorage.setItem('cartmodel', $.toJSON(cartmodel));
    },
    clearcart: function () {
        window.localStorage.removeItem('cartmodel');
    },
    getproducts: function () {
        return window.localStorage.getItem('productsmodel') == undefined ? undefined : $.parseJSON(window.localStorage.getItem('productsmodel'), true);
    },
    setproducts: function (productsmodel) {
        window.localStorage.setItem('productsmodel', $.toJSON(productsmodel));
    },
    clearproducts: function () {
        window.localStorage.removeItem('productsmodel');
    },
    getproduct_info: function () {
        return window.localStorage.getItem('product_info_model') == undefined ? undefined : $.parseJSON(window.localStorage.getItem('product_info_model'), true);
    },
    setproduct_info: function (product_info_model) {
        window.localStorage.setItem('product_info_model', $.toJSON(product_info_model));
    },
    clearproduct_info: function () {
        window.localStorage.removeItem('product_info_model');
    },
    setoriginalproducts: function (productsmodel) {
        window.localStorage.setItem('productsorignalmodel', $.toJSON(productsmodel));
    },
    getoriginalproducts: function () {
        return window.localStorage.getItem('productsorignalmodel') == undefined ? undefined : $.parseJSON(window.localStorage.getItem('productsorignalmodel'), true);
    },
    clearoriginalproducts: function () {
        window.localStorage.removeItem('productsorignalmodel');
    },
    
}


var mysession = {

    getcarts: function () {
        return sessionStorage.getItem('cartmodel') == undefined ? undefined : $.parseJSON(sessionStorage.getItem('cartmodel'), true);
    },
    setcart: function (cartmodel) {
        sessionStorage.setItem('cartmodel', $.toJSON(cartmodel));
    },
    clearcart: function () {
        sessionStorage.removeItem('cartmodel');
    },
    getproducts: function () {
        return sessionStorage.getItem('productsmodel') == undefined ? undefined : $.parseJSON(sessionStorage.getItem('productsmodel'), true);
    },
    setproducts: function (productsmodel) {
        sessionStorage.setItem('productsmodel', $.toJSON(productsmodel));
    },
    clearproducts: function () {
        sessionStorage.removeItem('productsmodel');
    },
    getproduct_info: function () {
        return sessionStorage.getItem('product_info_model') == undefined ? undefined : $.parseJSON(sessionStorage.getItem('product_info_model'), true);
    },
    setproduct_info: function (product_info_model) {
        sessionStorage.setItem('product_info_model', $.toJSON(product_info_model));
    },
    clearproduct_info: function () {
        sessionStorage.removeItem('product_info_model');
    },
    setoriginalproducts: function (productsmodel) {
        sessionStorage.setItem('productsorignalmodel', $.toJSON(productsmodel));
    },
    getoriginalproducts: function () {
        return sessionStorage.getItem('productsorignalmodel') == undefined ? undefined : $.parseJSON(sessionStorage.getItem('productsorignalmodel'), true);
    },
    clearoriginalproducts: function () {
        sessionStorage.removeItem('productsorignalmodel');
    }

}