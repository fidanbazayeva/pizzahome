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

document.addEventListener("scroll", () => {
    nav.classList.toggle("nav-fixed", window.scrollY > 400)
    if (window.scrollY > 400) {
        document.querySelector(".nav_center_img").src = "https://jimmie.qodeinteractive.com/wp-content/themes/jimmie/assets/img/logo.svg"
    }
    else {
        document.querySelector(".nav_center_img").src = "https://jimmie.qodeinteractive.com/wp-content/themes/jimmie/assets/img/logo.svg"
    }
}
);


