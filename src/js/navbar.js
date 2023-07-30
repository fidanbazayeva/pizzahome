export default function updateNavbar(){
    let products = JSON.parse(localStorage.getItem("cart"));
    if(products == null)
        products = [];
        
    const element = document.querySelector(".nav_right_a1");
    element.innerText = `${products.length}`
}