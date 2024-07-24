//cat ecosystem
//example of inheritence
const cat = {
  legs: 4,
  tail: true,
  furs: true,
  claws: "sharp",
};

//Efficient way - Object.create()

const lion = Object.create(cat);
const liger = Object.create(lion);
console.log("liger:",liger)
