const div = document.querySelector('#products');

axios('https://fakestoreapi.com/products')
.then((res) => {
    console.log(res.data);
    res.data.forEach((item) => {
        div.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img class="card-img-top" src="${item.image}" alt="Product image" style="height: 400px; object-fit: box;">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.category}</p>
                        <p class="card-text">${item.description}</p>
                        <h6 class="card-subtitle mb-2 text-muted">Price: $${item.price}</h6>
                    </div>
                </div>
            </div>
        `;
    });
})
.catch((err) => {
    console.log(err);
});