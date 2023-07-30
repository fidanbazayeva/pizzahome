let number = 1;
function increment() {
    number++;
    document.getElementById("number").textContent = number;
}
function decrement() {
    if (number > 0) {
        number--;
        document.getElementById("number").textContent = number;
    }
}

const nav = document.querySelector('nav');
const pages = document.getElementById('pages');
const pages_list = document.querySelector('.pages_list');



pages.addEventListener('mouseover', function () {
    pages_list.classList.add('pages_list--open')

})
pages.addEventListener('mouseout', function () {
    pages_list.classList.remove('pages_list--open')
})


const section1_left = document.querySelector('.section1_left');
const section1_right = document.querySelector('.section1_right');
const section1_left_img = document.getElementById('section1_left_img');
const section1_left_h1 = document.getElementById('section1_left_h1');
const section1_left_h2 = document.getElementById('section1_left_h2');



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

fetch("/menu/burger.json")
    .then(r => r.json())
    .then(data => {
        console.log(id)
        const product = data.burger.find(i => i.id == id);
        console.log(product)
        document.getElementById('section1_left_h2').innerText = product.price + "$";
        document.getElementById('section1_left_img').src = product.img;
        document.getElementById('section1_left_h1').innerText = product.name;

    })


   