const price = 4000;
if (price >= 5000){
    //10% discount
    const discount = price*10/100;
    const payAmount = price - discount;
    console.log('you get 10% discount')
    console.log('your price is ' + payAmount);
}
else{
    const nedded = 5000 - price;
    console.log('you need more ' + nedded + ' for getting 10% discount');
    console.log('your price is ' + price);
}