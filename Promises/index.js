
let img=document.getElementById("image");
function checkTransaction(){
    return true;
}

const myPromise=new Promise(function(resolve,reject){
    let transaction_status=false;
    setTimeout(function(){
        transaction_status=checkTransaction();

        if(transaction_status===true){
            resolve("Payment successfull");
        }else{
            reject("Payment failed");
        }
    },4000);
});

myPromise.then(function(res){
    console.log("res:",res);
    image.src=
    "https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd_w200.webp";

    
})
.catch(function(err){
    console.log("this is my err:",err);
});
