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

function Student(n, u) {
  (this.name = n), (this.unit = u);
}

Student.prototype.bio = function () {
  console.log(`hello from ${this.name}`);
};

let s1 = new Student("saber", 3);

s1.bio();
console.log("s1:", s1);

let s2 = new Student("Amar", 3);
console.log("s2:", s2);
