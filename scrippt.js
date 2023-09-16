const apiKey=document.getElementById("apiSearch");
//key-->3c896eda
const apiUrl='https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={API_KEY}';
const mainPage=document.getElementById("mainPage");
const userSearch=document.getElementById("inside-search");
const searchBtn=document.getElementById("search-btn");
const form=document.getElementById("form");
const loader=document.getElementById("loader");


async function MovieDetails(){

    const searchString=userSearch.value;
    const api_key=apiKey.value
    loader.classList.add('loader-on'); //loader on here
    
    try{//fetching data from api
        const response=await fetch(`https://www.omdbapi.com/?s=${searchString}&apikey=${api_key}`)
        var data=await response.json();
    }
    catch{
        alert("invalid api key")
    }
    loader.classList.remove('loader-on') //after data sucessfully loaded turn of our loader here

    let arr=data.Search;
    //if user entered wrong movie name which is no avialble
    if(arr===undefined){
        return alert("this moive not found search another movie") 

    }
    mainPage.innerHTML=''; 
    //itertating  arrray  using forEach loop
    arr.forEach((element)=>{
        // console.log(element);
        if(element.Poster==='N/A'){
            element.Poster='https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg';
        }
        const cardContainer=document.createElement('div');
        cardContainer.className="card-container";
        // console.log(cardContainer.className);

        cardContainer.innerHTML=`
            <div class="card-top">
                  <img src=${element.Poster} alt="poster">
            </div>
            <h3 class="movie-title">${element.Title}</h3>
        `;
        mainPage.appendChild(cardContainer);
        // console.log(cardContainer);
    });
    

}
form.addEventListener("submit" ,function(event){
    event.preventDefault();
})
form.addEventListener("submit",MovieDetails);








