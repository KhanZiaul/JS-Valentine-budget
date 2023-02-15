document.getElementById('kitkat-buy-btn').addEventListener('click',function(){

    const kitkatQuantityString = document.getElementById('kitkat-quantity').value;

    const kitkatQuantityInNmuber = parseInt(kitkatQuantityString);

    const kitkatPriceString = document.getElementById('kitkat-price').innerText;

    const kitkatPriceInNmuber = parseInt(kitkatPriceString);

    const kitkatTotalPrice = kitkatPriceInNmuber * kitkatQuantityInNmuber;

    const chocolatePrice = document.getElementById('chocolate');

    chocolatePrice.innerText = kitkatTotalPrice;

});