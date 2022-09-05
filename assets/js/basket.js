let products = [];
if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"));
}

let tableBody = document.querySelector(".table .table-body");


for (const product of products) {
    tableBody.innerHTML += `<tr>
    <td><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
  </tr>`
}

document.querySelector("sup").innerText = getProductsCount(products);

function getProductsCount(items) {
    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }
    return resultCount;
}

let removeIcon = document.querySelector(".remove-icon");
removeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("products") != null) {
        var userselection = confirm("Your cart will be cleared,are you sure?");
        if (userselection == true) {
            tableBody.remove();
            localStorage.clear();
        }
    }
    else 
    {
        alert("Cart is already empty!")
    }
})