// input tag taking
let date = document.getElementById('date');
let country = document.getElementById('country');
let people = document.getElementById('people');
let places = document.getElementById('places');
let price = document.getElementById('price');
// ===========================================

let url = `https://mock-api-templates-za9u.onrender.com/country`

async function fetchdata2(url) {
  let localid = localStorage.getItem('id')
  try {
    let res = await fetch(`${url}/${localid}`);

    let data = await res.json();
    displaydata2(data);
   
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchdata2(url)
// fetchdata(url)


// fetchdata(url);
//displaey data in input tag
function displaydata2(data) {
  date.value = data.Date;
  country.value = data.Location;
  people.value = 1
  places.value = data.Details;
  price.value = data.Price
}

//  expolore more places

let maincontainer = document.getElementById('Sh-data-main-container1');

// fetch data function
async function fetchdata(url, limit, page) {
  try {
    let res = await fetch(`${url}?_limit=${limit}&_page=${page}`);

    let data = await res.json();
    displaydata(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchdata(url, 6, 1);

function displaydata(data) {
  document.getElementById("Sh-data-main-container1").innerHTML = "";
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("subdiv");
    let img = document.createElement("img");
    img.setAttribute("src", ele.Image);

    let buttonR = document.createElement("button");
    buttonR.classList.add("btnR")
    buttonR.setAttribute("id", ele.id);
    buttonR.innerText = "Read More";

    let head = document.createElement("h2");
    head.innerText = ele.Location;
    let para = document.createElement("p");
    para.innerText = ele.Detail;
    para.className = "place-detail";

    let lastdiv = document.createElement("div");
    lastdiv.classList.add("last");
    let lastpara1 = document.createElement("p");
    lastpara1.innerText = ele.Time;
    let lastpara2 = document.createElement("p");
    lastpara2.innerText = ele.Date;
    lastdiv.append(lastpara1, lastpara2);


    let bookdiv = document.createElement("div");
    bookdiv.classList.add("bookdiv")
    let parap = document.createElement("h2");
    parap.innerText = `Rs. ${ele.Price}`;

    let book = document.createElement("button");
    book.innerText = "BOOK NOW";
    book.classList.add("booknow");
    



    // ========================================
    // add eventlistner on book get id of card
    book.addEventListener('click', (e) => {
      getcardid(ele);
    })



    book.setAttribute("id", ele.id);
    bookdiv.append(parap, book);

    card.append(img, buttonR, head, para, lastdiv, bookdiv);
    document.getElementById("Sh-data-main-container1").append(card);
  })
}
let pageCount = 1;
let seeMoreBtn = document.getElementById("seeMoreCardBtn");

seeMoreBtn.addEventListener('click', () => {
  fetchdata(url, 6, pageCount++);
});



// to store a id in local storage 
function getcardid(ele) {
  localStorage.setItem("id", ele.id);
  fetchdata2(url)
}







