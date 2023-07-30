const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const div_first = document.querySelector('.div_first');
const div_second = document.querySelector('.div_second');
const pagination = document.querySelector(".pagination");

btn2.addEventListener('click', function () {
    div_second.classList.remove('d-none');
    div_first.classList.add('d-none');
    window.scrollTo(0,pagination.offsetTop - 50);
})


btn1.addEventListener('click', function () {
    div_second.classList.add('d-none');
    div_first.classList.remove('d-none');
    window.scrollTo(0,pagination.offsetTop - 50);
})


document.addEventListener("scroll", () => {
    nav.classList.toggle("nav-fixed", window.scrollY > 500)
    if (window.scrollY > 500) {
        document.querySelector(".nav_center_img").src = "https://jimmie.qodeinteractive.com/wp-content/themes/jimmie/assets/img/logo.svg"
    }
    else {
        document.querySelector(".nav_center_img").src = "https://jimmie.qodeinteractive.com/wp-content/themes/jimmie/assets/img/logo.svg"
    }
}
);


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
