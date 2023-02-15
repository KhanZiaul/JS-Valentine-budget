document.getElementById('kitkat-buy-btn').addEventListener('click',function(){

    const kitkatQuantityString = document.getElementById('kitkat-quantity').value;

    const kitkatQuantityInNmuber = parseInt(kitkatQuantityString);

    const kitkatPriceString = document.getElementById('kitkat-price').innerText;

    const kitkatPriceInNmuber = parseInt(kitkatPriceString);

    const kitkatTotalPrice = kitkatPriceInNmuber * kitkatQuantityInNmuber;

    const chocolatePrice = document.getElementById('chocolate');

    chocolatePrice.innerText = kitkatTotalPrice;

});

document.getElementById('rose-buy-btn').addEventListener('click',function(){

    const roseQuantityString = document.getElementById('rose-quantity').value;

    const roseQuantityInNmuber = parseInt(roseQuantityString);

    const rosePriceString = document.getElementById('rose-price').innerText;

    const rosePriceInNmuber = parseInt(rosePriceString);

    const roseTotalPrice = rosePriceInNmuber * roseQuantityInNmuber;

    const rosePrice = document.getElementById('rose');

    rosePrice.innerText = roseTotalPrice;

});