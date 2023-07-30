const section = document.querySelector('.section1');


const nav = document.querySelector('nav');
const pages = document.getElementById('pages');
const pages_list = document.querySelector('.pages_list');
const blog = document.getElementById('blog');
const blog_list = document.querySelector('.blog_list');
const shop = document.getElementById('shop');
const shop_list = document.querySelector('.shop_list')


pages.addEventListener('mouseover', function () {
    pages_list.classList.add('pages_list--open')

})
pages.addEventListener('mouseout', function () {
    pages_list.classList.remove('pages_list--open')
})


blog.addEventListener('mouseover', function () {
    blog_list.classList.add('blog_list--open')
})
blog.addEventListener('mouseout', function () {
    blog_list.classList.remove('blog_list--open')
})

shop.addEventListener('mouseover',function(){
    shop_list.classList.add('shop_list--open')
})

shop.addEventListener('mouseout',function(){
    shop_list.classList.remove('shop_list--open')
})

fetch("http://127.0.0.1:5501/menu/burger.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        loadPizza(data.burger);
    })

function loadPizza(burger) {
    for (let i = 0; i < burger.length; i++) {
        section.innerHTML +=
            `
        <div data-id = ${burger[i].id} class = "section3_bottom">
            <img src="${burger[i].img}">
            <h4><a class="section3_bottom_a">${burger[i].name}</a></h4>
            <p>${burger[i].about} </p>
            <h3>${burger[i].price}$</h3>
        </div>
        `
    }
}

document.addEventListener("click", e => {
    if(e.target.classList.contains("section3_bottom")){
        window.location.href = `/src/pages/shop.html?id=${e.target.dataset.id}`
    }
})