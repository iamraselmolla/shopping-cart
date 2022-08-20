const totalPrice = document.getElementById('price');
function productCal(productId, commandProduct){
    const productField = document.getElementById(productId);
    let productNumber;
    const initNumber = parseInt(document.getElementById(productId).value);
     if(commandProduct){
        productNumber = initNumber +1;
    }else{
        productNumber = initNumber - 1
    }
        productField.value = productNumber;
        return productNumber;
}
function updatePhoneTotalPrice(amountOfProducts, price, productPriceId){
    const newProductsPrice = amountOfProducts * price;
    console.log(newProductsPrice)
    document.getElementById(productPriceId).innerText = newProductsPrice;

}
function updateTotal(){
    const phoneTotal = parseFloat(document.getElementById('phone-price').innerText);
    const caseToTal = parseFloat(document.getElementById('case-price').innerText);
    const subTotal = phoneTotal + caseToTal;
    const tax = (subTotal * 0.1).toFixed(2);
    const total = subTotal+tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;


}

// Phone price calculation
document.getElementById('phone-plus').addEventListener('click', function(){
    const amountNumber = productCal('phone-number', true);
    updatePhoneTotalPrice(amountNumber, 1219, 'phone-price');
    updateTotal()
});
document.getElementById('phone-minus').addEventListener('click', function(){
    const amountNumber = productCal('phone-number', false);
    updatePhoneTotalPrice(amountNumber, 1219, 'phone-price');
    updateTotal()
});

// Case total calculation
document.getElementById('case-plus').addEventListener('click', function(){
    const amountNumber = productCal('case-number', true);
    updatePhoneTotalPrice(amountNumber, 59, 'case-price');
    updateTotal()
});
document.getElementById('case-minus').addEventListener('click', function(){
    const amountNumber = productCal('case-number', false);
    updatePhoneTotalPrice(amountNumber, 59, 'case-price');
    updateTotal()
});