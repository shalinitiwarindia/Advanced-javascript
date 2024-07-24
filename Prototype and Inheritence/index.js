
//Implement an inheritance model for four wheeler automobiles
//Implement using both object.create() and constructor functions().

const automobiles = {
    Lighting: "LED",
    Seating: "Adjustable",
     
};



const Tata = Object.create( automobiles);
Tata.color="white";
console.log("Tata:",Tata);


 
