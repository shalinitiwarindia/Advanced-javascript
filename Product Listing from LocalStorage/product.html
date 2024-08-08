// Constructor function for creating a product
function Product(name, category, imageUrl, price, gender, sold = false) {
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

// Function to get products from local storage
function getProducts() {
    let products = localStorage.getItem('Products');
    return products ? JSON.parse(products) : [];
}

// Function to save products to local storage
function saveProducts(products) {
    localStorage.setItem('Products', JSON.stringify(products));
}

// Function to add a new product
function addProduct(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const imageUrl = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    const gender = document.getElementById('gender').value;
    const sold = document.getElementById('sold').checked;

    const product = new Product(name, category, imageUrl, price, gender, sold);

    let products = getProducts();
    products.push(product);
    saveProducts(products);

    document.getElementById('productForm').reset();
}

// Add event listener to the add button
document.getElementById('add').addEventListener('click', addProduct);



// Function to get products from local storage
function getProducts() {
    let products = localStorage.getItem('Products');
    return products ? JSON.parse(products) : [];
}

// Function to save products to local storage
function saveProducts(products) {
    localStorage.setItem('Products', JSON.stringify(products));
}

// Function to update the product counter
function updateCounter() {
    const products = getProducts();
    document.getElementById('counter').innerText = `Total Products: ${products.length}`;
}

// Function to remove a product
function removeProduct(index) {
    let products = getProducts();
    products.splice(index, 1);
    saveProducts(products);
    renderProducts();
}

// Function to toggle the sold status of a product
function toggleSoldStatus(index) {
    let products = getProducts();
    products[index].sold = !products[index].sold;
    saveProducts(products);
    renderProducts();
}

// Function to render the products
function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';
    const products = getProducts();

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productImg = document.createElement('img');
        productImg.src = product.imageUrl;
        productDiv.appendChild(productImg);

        const productName = document.createElement('h3');
        productName.innerText = product.name;
        productDiv.appendChild(productName);

        const productCategory = document.createElement('p');
        productCategory.innerText = `Category: ${product.category}`;
        productDiv.appendChild(productCategory);

        const productPrice = document.createElement('p');
        productPrice.innerText = `Price: $${product.price}`;
        productDiv.appendChild(productPrice);

        const productGender = document.createElement('p');
        productGender.innerText = `Gender: ${product.gender}`;
        productDiv.appendChild(productGender);

        const removeButton = document.createElement('button');
        removeButton.id = 'remove';
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', () => removeProduct(index));
        productDiv.appendChild(removeButton);

        const soldButton = document.createElement('button');
        soldButton.id = 'sold';
        soldButton.innerText = 'Sold';
        soldButton.className = product.sold ? 'sold' : 'not-sold';
        soldButton.addEventListener('click', () => toggleSoldStatus(index));
        productDiv.appendChild(soldButton);

        productContainer.appendChild(productDiv);
    });

    updateCounter();
}

// Initial render of products
renderProducts();

