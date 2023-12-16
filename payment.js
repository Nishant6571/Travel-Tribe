let singlecard = document.getElementById('siglecard');
// ===========================================

let link = `https://mock-api-templates-za9u.onrender.com/country`


// fetchdata(url)
function countrydata(url) {
  let dataretuen = localStorage.getItem("id")
  fetch(`${url}/${dataretuen}`)
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
  price.textContent = `PRICE : ${data.Price}`;

  let buttonconfrom = document.createElement('button');
  buttonconfrom.classList = "buttonconfrom";
  buttonconfrom.innerText = `Confirm Booking`;
  buttonconfrom.addEventListener('click', () => {
    pipulatedata(data);
  })

  continentcard.append(continentimg, continentname, date, price, buttonconfrom,);
  singlecard.append(continentcard);

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
let billsubmit = document.getElementById('billsubmit');
console.log(billsubmit)

// populate data on travellor details only on destination and departure data
function pipulatedata(data){
  destination.value=data.Location;
  date.value=data.Date
}

//copy data from travellor details to billimg details if both are same

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    billingFullName.value = fullname.value;
    billingEmail.value = email.value;
    billingPhone.value = phonenumber.value;
    billingPhone.value = phonenumber.value;
    billingAddress.value=travellorAddress.value;

  } 
});

//  submit click then show window alert
billsubmit.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  // window.alert("Booking was Successful");
  setTimeout(()=>{
   alerta();
  },1000)

});


function alerta(){
  window.alert(`${fullname.value} Your Booking was Successful. Enjoy your journey.
 HAPPY TO HELP`);
}

// to store a id in local storage 
function getcardid(ele) {
  localStorage.setItem("id", ele.id);
  fetchdata2(url);
}



// checkbox javascript
// const billingCheckbox = document.getElementById('includeBilling');
// const billingDetails = document.querySelector('.billing-details');

// billingCheckbox.addEventListener('change', function () {
//   billingDetails.style.display = this.checked ? 'block' : 'none';
// });

// let formcheckinput = document.getElementById("billingCheckbox");
// formcheckinput.addEventListener("click", (e) => {
//   // e.preventDefault() ;
//   Firstname1.value = Firstname.value;
//   Lastname1.value = Lastname.value;
//   Phone1.value = Phone.value;
//   Email1.value = Email.value;
//   Country1.value = Country.value;
//   Address1.value = Address.value;
// });

