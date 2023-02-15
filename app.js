function totalPrice(idOne,idTwo,idThree){
    
    const quantityInString = document.getElementById(idOne).value;

    const quantityInNmuber = parseInt(quantityInString);

    const priceInString = document.getElementById(idTwo).innerText;

    const priceInNmuber = parseInt(priceInString);

    const totalPrice = priceInNmuber * quantityInNmuber;

    const price = document.getElementById(idThree);

    price.innerText = totalPrice;

    return totalPrice;

}

document.getElementById('kitkat-buy-btn').addEventListener('click',function(){

  const price = totalPrice('kitkat-quantity','kitkat-price','chocolate');

  totalIs();

});

document.getElementById('rose-buy-btn').addEventListener('click',function(){

 const price = totalPrice('rose-quantity','rose-price','rose');

 totalIs();

});

document.getElementById('diary-buy-btn').addEventListener('click',function(){

   const price =  totalPrice('diary-quantity','diary-price','diary');

   totalIs();

});



function totalIs(){

  const total = document.getElementById('total');

  const priceRose = document.getElementById('rose').innerText;

  const priceDiary = document.getElementById('diary').innerText; 

  const priceKitkat = document.getElementById('chocolate').innerText;

  const totals = parseInt(priceDiary) + parseInt(priceRose) + parseInt(priceKitkat); 

  total.innerText = totals;

}

