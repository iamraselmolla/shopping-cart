const productField = document.getElementById('product-number');
const totalPrice = document.getElementById('price');
let productNumber;
function productCal(productId, commandProduct){
    const initNumber = parseInt(document.getElementById(productId).value);
     if(commandProduct){
        productNumber = initNumber +1;
    }else{
        productNumber = initNumber - 1
    }
        productField.value = productNumber;
        return productNumber;
    }

document.getElementById('increase').addEventListener('click', function(){
    productCal('product-number', true);
    const productPrize = parseInt(productField.value) * 1219;
    totalPrice.innerText = productPrize;

  
})
document.getElementById('decrease').addEventListener('click', function(){
    productCal('product-number', false);
})