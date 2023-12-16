

let poppara = document.getElementById("poppara");
let popup = document.getElementById("popup");
let url = `https://mock-api-templates-za9u.onrender.com/country`

let close = document.getElementById("close");


async function fetchdata(url, limit, page, par=""){
    try{
      let res = await fetch(`${url}?_limit=${limit}&_page=${page}&${par}`);
        
  let data = await res.json();
      displaydata(data);
      console.log(data);
}catch(error){
  console.log(error);
}
}
fetchdata(url, 9, 1);

function  displaydata(data){
  //  document.getElementById("Sh-data-main-container1").innerHTML = "Loding...";
  //  document.getElementById("Sh-data-main-container1").innerHTML = "";
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
    })
  
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
    book.setAttribute("id", ele.id);
    book.addEventListener("click", ()=>{
      booknow(ele);
    })
    bookdiv.append(parap, book);
    
    card.append(img, buttonR, head, para, lastdiv, bookdiv);
    document.getElementById("Sh-data-main-container1").append(card);
  })
}



function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}


let pageCount = 1;
let seeMoreBtn = document.getElementById("seeMoreCardBtn");

seeMoreBtn.addEventListener('click', () => {
  // document.getElementById("Sh-data-main-container1").innerHTML = "Loding...";
  document.getElementById("Sh-data-main-container1").style.paddingBottom = "32%";
  document.getElementById("Sh-data-main-container1").style.paddingTop = "0%"
    fetchdata(url, 9, ++pageCount);
});


// ADD CARD
let arr = JSON.parse(localStorage.getItem("key"))||[]

function booknow(ele){
  if(arr.includes(ele)) {
    alert("Already Add")
  } else {
    arr.push(ele);
  }
 
  localStorage.setItem("key", JSON.stringify(arr));
}


// ---------------------dropdown menu functionality----------------------------------

let button = document.getElementById("menuBtn");
    button.addEventListener('click', () => {
      let dropdown = document.getElementById("myDropdown");
      dropdown.classList.toggle("show");
});


// Search

let locations = document.getElementById("placeNameInp");
let check = document.getElementById("checkInDate");
let visitor = document.getElementById("visitor");

let search = document.getElementById("Sh-searchBtn");

// let searchIcon = document.getElementById("searchIcon");
// searchIcon.addEventListener("click", ()=>{
//   console.log("ok")
// })

search.addEventListener("click", ()=>{
  let obj2 = {};
  obj2.locations = locations.value;
  obj2.check = check.value;
  obj2.visitor = visitor.value;
  console.log(obj2);
  let str = obj2.check;
  let num=0;
  let str2 = "";
  for(let i=0; i<str.length; i++){
    if(i==5 || i==6){
      str2+=str[i];
    }
  }
  num = +(str2);
  console.log(num);
  let arr = ["January", "February", "April", "May", "June", "July", "Augest", "September", "October", "November", "Dacember"];

  
  console.log(`${locations.value}&${check.value}&${visitor.value}`);
  document.getElementById("Sh-data-main-container1").innerText="";
 // fetchdata(url, 1, 5, `Location=${locations.value}`);
})