//index.html file
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
let arr = [1, 2, 3];

arr.__proto__.myProp = "random";

let arr2 = [4, 5, 6];

console.log(arr2.myProp);
