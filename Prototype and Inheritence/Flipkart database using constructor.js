<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Prototype and Inheritence</h1>
</body>
</html>
<script src="index.js"></script>
//index.js file
function Shoes(b, p) {
      this.brand = b;
      this.seller = "flipkart";
      this.price = p;
    }
    
    Shoes.prototype.coupon = function () {
      console.log("20% discount on this products");
    };
    
    let s1 = new Shoes("nike", 3000);
     console.log("s1:", s1);
     s1.coupon();
