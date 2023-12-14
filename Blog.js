let url = `https://mock-api-templates-za9u.onrender.com/country`
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
fetchdata(url, 9, 1);

function  displaydata(data){
  document.getElementById("Sh-data-main-container1").innerHTML = "";
  data.forEach((ele)=>{
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
    book.setAttribute("id", ele.id);
    bookdiv.append(parap, book);
    
    card.append(img, buttonR, head, para, lastdiv, bookdiv);
    document.getElementById("Sh-data-main-container1").append(card);
  })
}
let pageCount = 1;
let seeMoreBtn = document.getElementById("seeMoreCardBtn");

seeMoreBtn.addEventListener('click', () => {
    fetchdata(url, 9, pageCount++);
});