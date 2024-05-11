let paymentBtn = document.getElementById('payment');
let paymentForm = document.querySelector('.form');
let marketPlace = document.querySelector('.game-div');
let XenditID = document.querySelector('#payment2');
let form2  = document.querySelector('.form2');
let XenditPH = document.querySelector('#payment3');
let form3 = document.querySelector('.form3');
let TazaPay = document.querySelector('#payment4');
let form4 = document.querySelector('.form4');
let close = document.querySelector('#close');
let form5 = document.querySelector('.form5');
let popUpform = document.querySelectorAll('.checkout')

// For Form1-----------------------------------
paymentBtn.addEventListener('click', ()=>{
  paymentForm.style.display = 'block';  
})
marketPlace.addEventListener('click', ()=>{
  paymentForm.style.display = 'none';
  form2.style.display = 'none';
  form3.style.display = 'none';
  form4.style.display = 'none';
},true);

// For Form2 ------------------------------------

XenditID.addEventListener('click', ()=>{
  form2.style.display = 'block';
},true);

// For Form3--------------------

XenditPH.addEventListener('click', ()=>{
  form3.style.display = 'block';
},true);

// For Form 4------------------------


TazaPay.addEventListener('click', ()=>{
  form4.style.display = 'block';
})

// Form 5----------------------------------
popUpform.forEach((form)=>{
  form.addEventListener('click', ()=>{
    form5.style.display = 'block';
  })
})

close.addEventListener('click', ()=>{
  form5.style.display = 'none';
}, true)