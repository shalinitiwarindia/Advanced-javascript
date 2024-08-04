let movies_div=document.getElementById("movies");
let id;
async function searchMovies(){
   try {
    const query= document.getElementById("query").value;
    const res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`);
    const data=await res.json(); 

    const movies=data.Search;
    return movies;
    //console.log("data:",data);
   } catch (err){
    console.log("err:",err);
   }
}
function appendMovies(data){
   
    movies_div.innerHTML=null;
    data.forEach(function(el){
        let p=document.createElement("p");
        p.innerText=el.Title;
        movies_div.append(p);
    });
}
async function main() {
     let data=await searchMovies();
     if(data===undefined){
        return false;
     }
     appendMovies(data);
}
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();

    },delay);
}
