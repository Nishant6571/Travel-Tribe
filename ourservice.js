let url=`https://6579ffb91acd268f9afa8ae7.mockapi.io/api/user`;
let mainsection = document.getElementById('mainsection');

let page=1;
async function fetchdata(url,limit,page){
try {
  let res= await fetch(`${url}?limit=${limit}&page=${page}`);
  let data = await res.json();
  console.log(data);  
  createcard(data)
} 
catch (error) {
console.log(error)   

}
}
fetchdata(url,6,1);

// create card
function createcard(data) {
    let cardmaincintainer = document.createElement('div');
    cardmaincintainer.classList = "cardmaincintainer";

    data.forEach((temp) => {
        let cardContainer = document.createElement('div');
        cardContainer.classList = "card";

        let img = document.createElement('img');
        img.classList=
        img.src = temp.avatar;
        img.alt = "card_img";

        let btn = document.createElement('button');
        btn.classList = "button";
        btn.innerText = "Read more";

        let h2 = document.createElement('h2');
        h2.classList = "h2";
        h2.textContent = temp.name;

        let title = document.createElement('p');
        title.classList = "title";
        title.textContent = temp.title;

        let hr = document.createElement('hr');
        hr.classList = "hr";

        let timereading = document.createElement('p');
        timereading.classList = "title";
        timereading.textContent = temp.timereading;

        cardContainer.append(img, btn, h2, title, hr, timereading);
        cardmaincintainer.append(cardContainer);
    });

    mainsection.append(cardmaincintainer);
}
// createcard(data)
let btn2=document.getElementById('btn2');

btn2.addEventListener('click' , (e)=>{
   page++
    fetchdata(url,6,page);
})



 