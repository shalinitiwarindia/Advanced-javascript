import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let getData= async ()=>{
    try{
        let res= await fetch("https://fakestoreapi.com/products/category/jewelery");

        let data=await res.json();
        append(data);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

getData();
let append=(data) =>{
    let container=document.getElementById("container");
    data.forEach(({title})=>{
        let p=document.createElement("p");
        p.innerText=title;

        container.append(p);
    });
}
