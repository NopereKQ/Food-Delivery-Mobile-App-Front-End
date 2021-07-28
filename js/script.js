var products = {
    1: {
      name : "Pizza veloper",
      desc : "Lorem ipsum dolor sit amet, constetur",
      img : "pizza-veloper.svg",
      price : 150
    },
    2: {
      name : "Pizza Cantos",
      desc : "Lorem ipsum dolor sit amet, constetur",
      img : "pizza-cantos.svg",
      price : 150
    }
};

const cart = [
    
];

const totalPrice = 0;

const addtocart = document.querySelectorAll('.add-to-cart')

addtocart.forEach((element) => {
    element.addEventListener('click', (el) => {
        let productId = element.getAttribute('product-id');
        // totalPrice += products[productId].price;
        // totalPrice += 10;
        // console.log(totalPrice);
        handleAddToCart(cart, products[productId])
        // cart.push(products[productId])
        console.log(cart)
    })
})

function handleAddToCart(type, array) {
    type.push(array)
}