const swiper_slide1 = document.querySelector('.swiper-wrapper2');
const displayValue1 = "block";
const displayValue2 = "none";

let count = 0

let arr = JSON.parse(localStorage.getItem("cart"));
if (arr === null) {
    arr = [];
}

fetch("http://127.0.0.1:5501/menu/db.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        loadPizza(data.pizza);
    })

function loadPizza(pizza) {
    for (let i = 0; i < pizza.length; i++) {
        swiper_slide1.innerHTML +=
            `
        <div class="swiper-slide">
            <div class="swiper-slide-card">
                <a>
                    <img class="section4_img" src="${pizza[i].img}">
                    <h1 class="section4_h1" >${pizza[i].name}<h1>
                    <p class="section4_p">${pizza[i].about}<p>
                    <h1 class="section4_h1">${pizza[i].price}$<h1>
                    <button onclick="increment(${pizza[i].id})" id="addButton" style = "display : block">Add</button>
                </a>
            </div>
        </div>
        `
    }
    console.log(arr.length);
    document.getElementById("productCount").textContent = arr.length;
}


let number = 0;

console.log(document.getElementById("productCount"));

const addButton = document.getElementById("addButton"); //add butonunu tutduq
console.log(arr.length);
// document.getElementById("productCount").textContent = arr.length;

const increment = async (parId) => {
    const checkExisting = arr.find(cart => cart.id == parId);//Birinci yoxlayirsan ki bele bir pizza var sebetde yoxsa yox. 
    if (checkExisting) { // eger varsa bura girir, burda da sebet arrayinden gedib hemin pizzani tapir ve sayini artirir
        number++;
        document.getElementById("productCount").innerText = number;
        console.log("Elvin");
        arr.find(cart => cart.id == parId).count += 1;
    } else { // eger yoxdursa yeni sebete birinci defe bu pizzadan artirilirsa onda gedir databazadan yeni db.jsondan o pizzani tapir ve sebete sayini ilkin olaraq 1 olaraq qeyd edir.
        let pizzaItem;
        await fetch("http://127.0.0.1:5501/menu/db.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data.pizza.forEach(element => {
                    if (element.id == parId) {
                        pizzaItem = element;
                    }
                });
            })
        number++;
        document.getElementById("productCount").innerText = number;

        let basketItem = { //basketItem sebete artirilan deyisendir. PizzaItemdan tek ferqi count-unun olmagidir.
            id: pizzaItem.id,
            img: pizzaItem.img,
            name: pizzaItem.name,
            about: pizzaItem.about,
            price: pizzaItem.price,
            count: 1
        }
        arr.push(basketItem)
    }

    localStorage.setItem("cart", JSON.stringify(arr));
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



