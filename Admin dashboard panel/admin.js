let arr=JSON.parse(localStorage.getItem(products))||[];
function Product(n,c,i,p,g,s){
    this.productName=n,
    this.category=c,
    this.imageUrl=i,
    this.price=p,
    this.gender=g,
    this.sold=s;

}

function storedProducts(e){
e.preventDefault();
let form=document.getElementById("products");

let productName=form.name.value;
let category=form.category.value;
let imageUrl=form.image.value;
let price=form.price.value;
let gender=form.gender.value;
let sold= form.sold.value;

let p1=new Product(productName,category,imageUrl,price,gender,sold);
    arr.push(p1);
    console.log("Product",arr);
    
    localStorage.setItem("products",JSON.stringify(arr));
}
