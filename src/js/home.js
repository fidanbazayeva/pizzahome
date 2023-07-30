import updateNavbar from "./navbar.js";
updateNavbar();




const url = "https://crystalline-wood-scar.glitch.me/menu";


const nav = document.querySelector("nav");
const pages = document.getElementById('pages');
const pages_list = document.querySelector('.pages_list');



pages.addEventListener('mouseover', function () {
    pages_list.classList.add('pages_list--open');

})
pages.addEventListener('mouseout', function () {
    pages_list.classList.remove('pages_list--open');

})




const list = document.getElementById('section2_list');

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        loadUsers(data);
    })

function loadUsers(menu) {
    for (let i = 0; i < menu.length; i++) {
        list.innerHTML +=
            `
            <div>
            <div class="section2_h5_item">
                            <h5 class="section2_h5">${menu[i].name}</h5>
                            <h5 class="section2_h5">${menu[i].price}$</h5>
                        </div>
                        <div>
                            <p class="section2_p">${menu[i].about}</p>
                        </div>
            </div>

            `
    }

}

document.addEventListener("scroll", () => {
    nav.classList.toggle("nav-fixed", window.scrollY > 500)
    if (window.scrollY > 500) {
        document.querySelector(".nav_center_img").src = "https://jimmie.qodeinteractive.com/wp-content/themes/jimmie/assets/img/logo.svg"
    }
    else {
        document.querySelector(".nav_center_img").src = "https://jimmie.qodeinteractive.com/wp-content/themes/jimmie/assets/img/logo-light.svg"
    }
}
);

const hMenu = document.querySelector('.hMenu');
const navCenter = document.querySelector('.nav_center');
const closebtn = document.querySelector('.closebtn');

hMenu.addEventListener("click", () => {

    navCenter.style.transform = `translateX(0)`
})

closebtn.addEventListener('click', function () {
    

    navCenter.style.transform = `translateX(100%)`
})


// const orderList = querySelector('.order_now');
// const orderBtn = querySelector('.order_now_open');
// const closeBtn = querySelector('.order_now_close');



// orderList.addEventListener('click', function () {
//     orderBtn.classList.add('order_now_open-open');
// })

// closeBtn.addEventListener('click', function () {
//     orderBtn.classList.remove('order_now_open-open');
// })