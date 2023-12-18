let singlecard = document.getElementById('siglecard');
// ===========================================

let link = `https://deepak-server-dosm.onrender.com/country`


// fetchdata(url)
function countrydata(url) {
  let dataretuen = localStorage.getItem("id")
  fetch(`${url}/${dataretuen || 1}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      createcard(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
}
countrydata(link)
// creata card function 
let container=document.querySelector('.container');
let billing_container=document.querySelector('.billing-container');
function createcard(data) {

  let continentcard = document.createElement('div')
  continentcard.classList = "continentcard";

  let continentimg = document.createElement('img');
  continentimg.classList = "continentimg";
  continentimg.src = data.Image;

  let continentname = document.createElement('h2');
  continentname.classList = "continentname";
  continentname.textContent = data.Location;

  let date = document.createElement('p');
  date.classList = "date";
  date.textContent = data.Date;

  let price = document.createElement('h4');
  price.classList = "price";
  price.textContent = `PRICE(Rs) : ${data.Price}`;

  // second div for overview
  let overview = document.createElement('div')
  overview.classList = "overview";

  let overviewcontent = document.createElement('p');
  overviewcontent.classList = "overviewcontent";
  overviewcontent.innerHTML = ` <span class="overview-word">Overview </span>  ${data.Details}`;

  overview.appendChild(overviewcontent);



  let buttonconfrom = document.createElement('button');
  buttonconfrom.classList = "buttonconfrom";
  buttonconfrom.innerText = `Click Here For Booking`;
  buttonconfrom.addEventListener('click', () => {
    pipulatedata(data);
    container.style.display="block";
    billing_container.style.display="block";
  })

  continentcard.append(continentimg, continentname, date, price, buttonconfrom,);
  singlecard.append(overview,continentcard);

}


// createcard(data)

// get all input tag reference here  
//  travellor details
let fullname = document.getElementById('fullName');
let email = document.getElementById('email');
let phonenumber = document.getElementById('phone');
let landline = document.getElementById('Landline');
let destination = document.getElementById('destination');
let date = document.getElementById('departureDate');
let travellorAddress = document.getElementById('travellorAddress');

let checkbox = document.getElementById('includeBilling');


//  billing input reference
let billingFullName = document.getElementById('billingFullName');
let billingEmail = document.getElementById('billingEmail');
let billingPhone = document.getElementById('billingPhone');
let billingAddress = document.getElementById('billingAddress');
let billingCardNumber = document.getElementById('billingCardNumber');
let billingExpiryDate = document.getElementById('billingExpiryDate');
let billingCvv = document.getElementById('billingCvv');


let billsubmit = document.getElementById('billsubmit');
console.log(billsubmit)



//copy data from travellor details to billimg details if both are same

checkbox.addEventListener('change', () => {

  if (checkbox.checked) {
    billingFullName.value = fullname.value;
    billingEmail.value = email.value;
    billingPhone.value = phonenumber.value;
    billingAddress.value = travellorAddress.value;
  } else {
    billingFullName.value = '';
    billingEmail.value = '';
    billingPhone.value = '';
    billingAddress.value = '';
  }

});

let paymentcontainer=document.querySelector('.payment-container');
//  submit click then show window alert
billsubmit.addEventListener('click', (event) => {
  
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  // window.alert("Booking was Successful");
  if (fullname.value=="" || phonenumber.value=="" ||   travellorAddress.value==""  || email.value=="" ||  billingFullName.value=="" || billingEmail.value=="" ||  billingPhone.value==""){
    alert("please fill all necessary fields");
  }
else{
  // window.alert(`${fullname.value} Please complete your payment`);
  // paymentcontainer.style.display="block"
  setTimeout(function () {
    window.alert(`${fullname.value} Please complete your payment`);
  paymentcontainer.style.display="block"
}, 1000);
}

});


// function alerta(){
//   window.alert(`${fullname.value} Your Booking was Successful. Enjoy your journey.
//  HAPPY TO HELP`);
// }

// populate data on travellor details only on destination and departure data


// payment countainer refernece
let paymentcardNumber=document.getElementById('cardNumber');
let paymentexpiryDate=document.getElementById('expiryDate');
let paymentcvv=document.getElementById('cvv');
let paymentcardHolder=document.getElementById('cardHolder');
let submitPayment=document.getElementById('submitPayment');

// receipt container reference
let receiptcardNumberValue=document.getElementById('cardNumberValue');
let receiptexpiryDateValue=document.getElementById('expiryDateValue');
let receiptcvvValue=document.getElementById('cvvValue');
let receiptcardHolderValue=document.getElementById('cardHolderValue');
let receiptpaymentMethodText=document.getElementById('paymentMethodText');

let receiptpackageValue=document.getElementById('packageValue');
let receiptflightValue=document.getElementById('flightValue');
let receiptmoneyvalue=document.getElementById('moneyvalue');


// capture paymentreceipt class
let paymentreceipt = document.querySelector('.paymentreceipt');

submitPayment.addEventListener('click' , (event)=>{
  event.preventDefault(); 
  console.log(paymentcardNumber.value.length!==16 )
  console.log(paymentcardNumber.value.length);
  if (paymentcardNumber.value=="" || paymentexpiryDate.value=="" || paymentcardHolder.value=="" || paymentcardHolder.value==""){
    window.alert("Please fill required field");
  }
  
  else if(paymentcardNumber.value.length!=16 ){
    window.alert("Card number must be 16 digit");
  }
  else if(paymentcvv.value.length!==3 ){
    window.alert("CVV number must be 3 digit");
  }
  else{
    receiptcardNumberValue.textContent=paymentcardNumber.value;
    receiptexpiryDateValue.textContent=paymentexpiryDate.value;
    receiptcardHolderValue.textContent=paymentcardHolder.value;
    // paymentreceipt.style.display="block";
    // window.alert("Payment was succesful");
    setTimeout(function () {
      window.alert("Payment was successful");
      paymentreceipt.style.display="block";
  }, 2000);
  }
})


// update amount in payment from 
let amounttobePaid=document.getElementById('amounttobePaid');


function pipulatedata(data) {
  receiptpackageValue.textContent =data.Location;
  receiptflightValue.textContent = data.Date;
  receiptmoneyvalue.textContent=data.Price;
  amounttobePaid.value=data.Price
}


// to store a id in local storage 
function getcardid(ele) {
  localStorage.setItem("id", ele.id);
  fetchdata2(url);
}

// download in pdf 
// let pdfdownload=document.getElementById('downloadpdf');
// let receiptpageall=document.getElementById('receiptpageall');

// pdfdownload.addEventListener('click' , ()=>{
//   console.log(receiptpageall);
// })

