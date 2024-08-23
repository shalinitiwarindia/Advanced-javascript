function sum(...numbs){
  console.log(numbs);
  return numbs.reduce((acc,crr)=>{
    acc+=crr;
    return acc;
  },0)
}

console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6,7,8));
