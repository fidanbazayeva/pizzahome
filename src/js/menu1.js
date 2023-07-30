const list = document.getElementById('section1_list');

fetch("https://crystalline-wood-scar.glitch.me/menu")
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
        <div class="section1_h5_item">
                        <h5 class="section1_h5">${menu[i].name}</h5>
                        <h5 class="section1_h5">${menu[i].price}$</h5>
                    </div>
                    <div>
                        <p class="section1_p">${menu[i].about}</p>
                    </div>

        </div>

        `
    }
}