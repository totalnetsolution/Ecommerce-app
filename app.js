const div = document.querySelector('#products');

axios('https://fakestoreapi.com/products')
.then((res) => {
    console.log(res.data);
    res.data.forEach((item) => {
        div.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-4">
        <img width="300" src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text"><strong>Category:</strong> ${item.category}</p>
        <p class="card-text"><strong>Price:</strong> $${item.price}</p>
        </div>
         </div>
        </div>
        `;
    });
})
.catch((err) => {
    console.log(err);
});