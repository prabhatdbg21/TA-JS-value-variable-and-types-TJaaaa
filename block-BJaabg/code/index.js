/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
var phone = 0;
var phoneWithAccessories = 0; 
// your code goes here

// ⛑ Answer of the above will `$334.76`.

while (bank_balance > SPENDING_THRESHOLD){
    phoneWithAccessories = ( PHONE_PRICE + ACCESSORY_PRICE) + (PHONE_PRICE + ACCESSORY_PRICE ) * TAX_RATE;
    amount = amount + phoneWithAccessories ;
    bank_balance = bank_balance - phoneWithAccessories ;
}
while ( bank_balance >0 && bank_balance < 200) {
    phone =  PHONE_PRICE  + PHONE_PRICE * TAX_RATE;
    amount = amount + phone ;
    bank_balance = bank_balance - phone ;
}

if (amount < bank_balance){
    alert ("can afford it");
}
else if (amount > bank_balance){
    alert ("can not afford it");
}
