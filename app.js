document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('#products');
    const categoryButtonsDiv = document.querySelector('#category-buttons');
    let allProducts = [];

    axios('https://fakestoreapi.com/products')
        .then((res) => {
            allProducts = res.data;
            renderProducts(allProducts);
            renderCategoryButtons(allProducts);
        })
        .catch((err) => {
            console.log(err);
        });

    function renderProducts(products) {
        div.innerHTML = '';
        products.forEach(item => {
            div.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${item.image}" class="card-img-top" alt="Product image">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                        </div>
                        <div class="card-footer">
                            <p>Category: ${item.category}</p>
                            <p>Price: $${item.price}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    function renderCategoryButtons(products) {
        const categories = [...new Set(products.map(item => item.category))];
        categoryButtonsDiv.innerHTML = `<button class="btn btn-primary me-2" onclick="filterCategory('all')">All</button>`;
        categories.forEach(category => {
            categoryButtonsDiv.innerHTML += `<button class="btn btn-primary me-2" onclick="filterCategory('${category}')">${category}</button>`;
        });
    }

    window.filterCategory = function(category) {
        if (category === 'all') {
            renderProducts(allProducts);
        } else {
            const filteredProducts = allProducts.filter(item => item.category === category);
            renderProducts(filteredProducts);
        }
    }
});