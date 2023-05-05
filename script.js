window.addEventListener("load",function() {
    calcCart();
    var cart = document.forms.cart;
    cart.elements.shoe.onchange = calcCart;
    cart.elements.insurance.onchange = calcCart;
    var shippingOptions = document.querySelectorAll('input[name="shipping"]');
    for (var i = 0; i <= shippingOptions.length; i++) {
        shippingOptions[i].onclick = calcCart;
    }
});










function calcCart() {
    var cart = document.forms.cart;
    var shoeIndex = cart.elements.shoe.selectedIndex;
    var shoeCost = cart.elements.shoe.options[shoeIndex].value;
    cart.elements.shoeCost.value = formatNumber(shoeCost)
    var shipCost = document.querySelector('input[name="shipping"]:checked').value;
    cart.elements.shippingCost.value = formatNumber(shipCost);
    var iIndex = cart.elements.insurance.selectedIndex;
    var iCost = cart.elements.insurance.options[iIndex].value;
    cart.elements.iCost.value = formatNumber(iCost)
    cart.elements.totalCost.value = formatUSCurrency(shoeCost+shipCost+iCost);
}


function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function formatUSCurrency(val) {
    return val.toLocaleString('en-US', { style: "currency", currency: "USD" });
 }