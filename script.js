let poppara = document.getElementById("poppara");
let popup = document.getElementById("popup");
let url = `https://mock-api-templates-za9u.onrender.com/country`

let close = document.getElementById("close");

async function fetchdata(url, limit, page){
    try{
      let res = await fetch(`${url}?_limit=${limit}&_page=${page}`);
        
      let data = await res.json();
      displaydata(data);
      console.log(data);
    }catch(error){
      console.log(error);
    }
}
fetchdata(url, 6, 1);

function  displaydata(data){
  // document.getElementById("Sh-data-main-container1").innerHTML = "";
  data.forEach((ele)=>{
    let card = document.createElement("div");
    card.classList.add("subdiv");
    let img = document.createElement("img");
    img.setAttribute("src", ele.Image);
 
    let buttonR = document.createElement("button");
    buttonR.classList.add("btnR")
    buttonR.setAttribute("id", ele.id);
    buttonR.innerText = "Read More";
    buttonR.addEventListener("click", ()=>{
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup').style.color = "white";
      document.getElementById('popup').style.fontSize = "20px"
      poppara.innerText = ele.Details;
      document.getElementById('popup').style.backgroundImage =  `url(${ele.Image})`;
      document.getElementById('popup').style.backgroundSize = "cover";
    });
  
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
   //add eventlistner on book get id of card
    book.setAttribute("id", ele.id);
    book.addEventListener("click", ()=>{
      booknow(ele);
    });
    bookdiv.append(parap, book);
    
    card.append(img, buttonR, head, para, lastdiv, bookdiv);
    document.getElementById("Sh-data-main-container1").append(card);  })
}

// ----------------------pop close functionality---------------------------

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

let pageCount = 1;
let seeMoreBtn = document.getElementById("seeMoreCardBtn");

seeMoreBtn.addEventListener('click', () => {
    fetchdata(url, 6, pageCount++);

    let dataAlignContainer = document.getElementById("Sh-alignCont9");
    let newHeight1 = dataAlignContainer.offsetHeight + 1300; // Increase height by 10vh
    dataAlignContainer.style.height = newHeight1 + "px";

    let dataContainer = document.getElementById("Sh-data-main-container1");
    let newHeight2 = dataContainer.offsetHeight + 1300; // Increase height by 10vh
    dataContainer.style.height = newHeight2 + "px";
    dataContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
    dataContainer.style.gridTemplateRows = "repeat(auto-fill, minmax(600px, 1fr))";

    // console.log("Old Height:", dataAlignContainer.offsetHeight);
// Increase height by 10vh
// console.log("New Height:", newHeight1);
});


// to store a id in local storage 
function  getcardid(ele){
localStorage.setItem("id", ele.id);
}

// ----------------------Dropdown menu functionality----------------------------------------

let button = document.getElementById("menuBtn");
    button.addEventListener('click', () => {
      let dropdown = document.getElementById("myDropdown");
      dropdown.classList.toggle("show");
});

// --------------------login page attach-----------------------------

function redirectToPage(pagename) {
  var loginPageUrl = `${pagename}`;

  window.location.href = loginPageUrl;
}


// ADD CARD
let arr = JSON.parse(localStorage.getItem("key"))||[]

// function booknow(ele){
//   if(arr.includes(ele)) {
//     alert("Already Add")
//   } else {
//     arr.push(ele);
//   }
//   localStorage.setItem("key", JSON.stringify(arr));
//   
// }

function booknow(ele){
  localStorage.setItem("id", ele.id);
  redirectToPage('payment.html');
}

//=======================================Package functionality==============================================

async function getDataFromServer(apiOfData){
  try{
    let res = await fetch(apiOfData);
    let data = await res.json();
    createCardForDisplay(data);
    console.log(data);

  } catch(error){
    console.log(error);
  }
}

let dataAppendContainer = document.getElementById("placesCont");

function createCardForDisplay(placesDataArr){

  placesDataArr.forEach((placeObj) => {
    let card = document.createElement("div");
    card.className = "placeCard";

    let imageCont = document.createElement("div");
    imageCont.className = "imgCont";
    let image = document.createElement("img");
    image.src = placeObj.Image;
    imageCont.append(image);

    let detailCont = document.createElement("div");
    detailCont.className = "placeDetailCont";
    let locationName = document.createElement("h3");
    locationName.innerHTML = placeObj.Location;
    let details = document.createElement("p");
    details.innerHTML = placeObj.Detail;

    detailCont.append(locationName);
    detailCont.append(details);

    let timeAndDateCont = document.createElement("div");
    timeAndDateCont.className = "timeAndDateCont";
    // let time = document.createElement("div");
    // time.textContent = placeObj.Time;
    let date = document.createElement("div");
    date.textContent = placeObj.Date;
    // timeAndDateCont.append(time);
    timeAndDateCont.append(date);
    // console.log(placeObj.Date);
    // console.log(placeObj.Time);

    let priceAndBookBtnCont = document.createElement("div");
    priceAndBookBtnCont.className = "priceAndBtnCont";
    let priceCont = document.createElement("div");
    priceCont.innerHTML = `Rs. ${placeObj.Price}`;
    let buttonCont = document.createElement("div");
    let buttonBook = document.createElement("button");
    buttonBook.textContent = "BOOK NOW";
    buttonBook.addEventListener("click", ()=>{
      booknow(placeObj);
    });
    buttonCont.append(buttonBook);
    priceAndBookBtnCont.append(priceCont);
    priceAndBookBtnCont.append(buttonCont);

    card.append(imageCont);
    card.append(detailCont);
    card.append(timeAndDateCont);
    card.append(priceAndBookBtnCont);
    dataAppendContainer.append(card);
  });
  
}


let historyPlaceLink = document.getElementById("HistoricalPackageLInk");

historyPlaceLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  getDataFromServer(`https://new-tech-server.onrender.com/historical`);
});


let CampingPackageLink = document.getElementById("CampingPackageLink");

CampingPackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  getDataFromServer(`https://new-tech-server.onrender.com/campingPlaces`);
});

let DesertPackageLink = document.getElementById("DesertPackageLink");

DesertPackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  getDataFromServer(`https://new-tech-server.onrender.com/DesertPlaces`);
});

let HikingPackageLink = document.getElementById("HikingPackageLink");

HikingPackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  getDataFromServer(`https://new-tech-server.onrender.com/HikingPlaces`);
});

let EuropePackageLink = document.getElementById("EuropePackageLink");

EuropePackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  
  getDataFromServer(`https://new-tech-server.onrender.com/EuropeDestination`);
});

document.getElementById("backToPageBtn").addEventListener('click', () => {
  document.getElementById('placesOuterContainer').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'block';
  document.getElementById('Sh-overlap1stCont').style.display = 'block';
});



