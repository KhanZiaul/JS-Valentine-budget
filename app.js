function totalPrice(idOne,idTwo,idThree){
    
    const quantityInString = document.getElementById(idOne).value;

    const quantityInNmuber = parseInt(quantityInString);

    const priceInString = document.getElementById(idTwo).innerText;

    const priceInNmuber = parseInt(priceInString);

    const totalPrice = priceInNmuber * quantityInNmuber;

    const price = document.getElementById(idThree);

    price.innerText = totalPrice;
}



document.getElementById('kitkat-buy-btn').addEventListener('click',function(){

    totalPrice('kitkat-quantity','kitkat-price','chocolate')

});

document.getElementById('rose-buy-btn').addEventListener('click',function(){

    totalPrice('rose-quantity','rose-price','rose')

});

document.getElementById('diary-buy-btn').addEventListener('click',function(){

    totalPrice('diary-quantity','diary-price','diary')

});