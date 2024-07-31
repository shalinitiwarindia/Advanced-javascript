
document.getElementById('order-button').addEventListener('click', function() {
    const form = document.getElementById('order-form');
    const selectedFoods = Array.from(form.elements['food'])
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const orderDetails = document.getElementById('order-details');
    const foodImage = document.getElementById('food-image');
    const orderId = document.getElementById('order-id');

    if (selectedFoods.length > 0) {
        orderDetails.style.display = 'block';
        orderId.textContent = 'Order ID: ' + Math.floor(Math.random() * 10000);

        // Set image source based on selected food
        switch (selectedFoods[0]) {
            case 'burger':
                foodImage.src = 'https://www.burgerking.com.my/upload/image/Category/14/Steak%20House%20Whopper%20Ala%20Carte.jpg'; // Replace with your burger image URL
                break;
            case 'fries':
                foodImage.src = 'https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg'; // Replace with your fries image URL
                break;
            case 'coke':
                foodImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8E3nwiIrkIZ8Gcof5jigP85HBYzVIJ-HmQ&s'; // Replace with your coke image URL
                break;
            case 'ice-cream':
                foodImage.src = 'https://www.modernhoney.com/wp-content/uploads/2018/08/Homemade-Chocolate-Ice-Cream-1.jpg'; // Replace with your ice cream image URL
                break;
            default:
                foodImage.src = '';
        }
    } else {
        orderDetails.style.display = 'none';
    }
});

