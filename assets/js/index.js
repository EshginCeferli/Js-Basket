let basketBtns = document.querySelectorAll("#products .card a");

let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
} else {
    console.log("bos");
}

basketBtns.forEach(basketBtn => {

    basketBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.innerText;
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
        }
        else {
            products.push({
                name: productName,
                desc: productDesc,
                image: productImage,
                count: 1,
                id: productId
            })
        }
        localStorage.setItem("products", JSON.stringify(products));
        document.querySelector("sup").innerHTML = getProductCount(products);

    })
});

document.querySelector("sup").innerHTML = getProductCount(products);

function getProductCount(items) {
    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count;
    }
    return resultCount;
}