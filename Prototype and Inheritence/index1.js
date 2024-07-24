
//Implement an inheritance model for four wheeler automobiles
//Implement using both object.create() and constructor functions().

function automobiles(n,p,c){
    this.name=n;
    this.price=p;
    this.color=c;
}
automobiles.prototype.seat= function(){
    console.log("Seat is 4")
}
let a1=new automobiles("Hyundai",100000000,"black");
console.log("a1",a1);
 a1.seat();
