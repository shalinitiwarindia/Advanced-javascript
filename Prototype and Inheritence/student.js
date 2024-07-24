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
//using object.create()method
const student = {

  unit: 3,
  batch: 'web 17',
  instructor: 'sk',

}

const s1 = Object.create(student)
const s2 = Object.create(student)


console.log(s1,s2);
