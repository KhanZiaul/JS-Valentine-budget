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


document.getElementById('diary-buy-btn').addEventListener('click',function(){

    const diaryQuantityString = document.getElementById('diary-quantity').value;

    const diaryQuantityInNmuber = parseInt(diaryQuantityString);

    const diaryPriceString = document.getElementById('diary-price').innerText;

    const diaryPriceInNmuber = parseInt(diaryPriceString);

    const diaryTotalPrice = diaryPriceInNmuber * diaryQuantityInNmuber;

    const diaryPrice = document.getElementById('diary');

    diaryPrice.innerText = diaryTotalPrice;

});