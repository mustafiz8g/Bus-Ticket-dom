
/**
 const menuBtn = document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobile-menu');

//menu icon
menuBtn.addEventListener('click', function(){
    menuBtn.children[0].classList.toggle('hidden');
    const menuCloseBtn = document.getElementById('close-btn');
    menuCloseBtn.classList.toggle('hidden')
    mobileMenuEl.classList.toggle('hidden')
    mobileMenuEl.classList.toggle('flex')
})
 */

const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponBtnEl = document.getElementById('coupon-btn');
const defaultText = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total');
const inputButtonEl = document.getElementById('input-button');
const discountSectionEl = document.getElementById('discount-section');
const discountEl = document.getElementById("discount");
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');


let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
    const value = event.innerText;

    if(selectedSeat.includes(value)){
        return alert('seat already booked')
    }
    else if(selectedSeat.length < 4 ){
         event.classList.add('bg-primary')
    event.classList.add('text-white')


    selectedSeat.push(event.innerText);
   totalBookedEl.innerText = selectedSeat.length;

   //decrease available seat
   
   const availableSeatValue = parseFloat(availableSeatEl.innerText);
   const newAvailableSeatValue = availableSeatValue - 1;
   availableSeatEl.innerText = newAvailableSeatValue
   
    //remove default text
    defaultText.classList.add('hidden')

    selectedSeatEl.innerHTML += `<li class=" text-base font-normal flex justify-between">
    <span> ${event.innerText} </span>
    <span> Economy </span>
    <span> 550 </span>
    </li>
    `
   //update total price
   totalPrice += 550;
   totalPriceEl.innerText = totalPrice.toFixed(2);
   
   //active coupon button
   if(selectedSeat.length > 3){
    couponInputEl.removeAttribute('disabled')
    couponBtnEl.removeAttribute('disabled')
   }

    }
    else{
        return alert('maximum seat booked')
    }
}


//coupon button function

document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponInputValue = couponInputEl.value;
    let couponSave = 0;
    
    if(couponInputValue !==  "NEW50" && couponInputValue !== "Couple 20"){
        alert ('Your Provided Coupon is not valid');
        return;
    }
   
   if(couponInputValue === 'NEW50'){
         couponSave = totalPrice * .15;
         inputButtonEl.classList.add('hidden');
         discountSectionEl.classList.remove('hidden')
         
        }
        else if(couponInputValue === 'Couple 20'){
        couponSave = totalPrice * .20;
        inputButtonEl.classList.add('hidden')
        discountSectionEl.classList.remove('hidden')

    }
 const grandTotalValue = totalPrice - couponSave;
 const discount = totalPrice - grandTotalValue
 discountEl.innerText = discount.toFixed(2);
 grandTotalEl.innerText = grandTotalValue.toFixed(2)



})

phoneNumberEl.addEventListener('input', function(e){
    const inputValue = e.target.value;
    if(inputValue.length >= 11){
        nextBtnEl.removeAttribute('disabled')
    }
})

document.getElementById('close').addEventListener('click', function(){
    window.location.reload();
})