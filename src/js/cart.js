const table = document.querySelector('.table--body')
let arr = JSON.parse(localStorage.getItem("cart"));
if (arr === null) {



} else {
  loadTable()
}
function increment(index) {
  ++arr[index].count;
  loadTable();
  localStorage.setItem('cart', JSON.stringify(arr));
}
function decrement(index) {
  if (arr[index].count > 0) {
    --arr[index].count;
    if (arr[index].count === 0) {
      arr = arr.filter((i, u) => u !== index)
    }
  }
  localStorage.setItem('cart', JSON.stringify(arr));
  loadTable();
}
function deleteProduct(index) {
  arr = arr.filter((i, u) => u !== index)
  localStorage.setItem('cart', JSON.stringify(arr));
  loadTable();
}



const nav = document.querySelector('nav');
const pages = document.getElementById('pages');
const pages_list = document.querySelector('.pages_list');
const blog = document.getElementById('blog');
const blog_list = document.querySelector('.blog_list');
const shop = document.getElementById('shop');
const shop_list = document.querySelector('.shop_list');
const part3 = document.querySelector('part3');


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

shop.addEventListener('mouseover', function () {
  shop_list.classList.add('shop_list--open')
})

shop.addEventListener('mouseout', function () {
  shop_list.classList.remove('shop_list--open')
})

function loadTable() {
  table.innerHTML = "";
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let subtotal = (arr[i].price * arr[i].count).toFixed(2);
    total += Number(subtotal);
    table.innerHTML +=
      `
          <tr> 
              <td class="cart_item1"><img src="${arr[i].img}">${arr[i].name}</td>
              <td>${arr[i].price}</td>
              <td>
                   <button class="btn" onclick="decrement(${i})">
                     <i class = "fa-solid fa-minus"></i>
                   </button>
                   <span  class="btn_span" id="number">${arr[i].count}</span>
                   <button class="btn" onclick="increment(${i})">
                    <i class = "fa-solid fa-plus"></i>
                   </button>
              </td>
              <td>
                ${subtotal}
              </td>
              <td><button class="btn1" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash"></i></button></td>
          </tr>
        `
  }
  document.getElementById("total__result").innerText = total;
}