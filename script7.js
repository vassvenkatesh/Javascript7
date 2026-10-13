
let container = document.getElementById("product-container");
let errorMessage = document.getElementById("error-message");

fetch("https://fakestoreapi.com/products/")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(function(products) {

        products.forEach(function(product) {

            let card = document.createElement("div");
            card.className = "product-card";

            let image = document.createElement("img");
            image.className = "product-image";
            image.src = product.image;
            image.alt = product.title;

            let title = document.createElement("h3");
            title.className = "product-title";
            title.textContent = product.title.slice(0, 60);

            let category = document.createElement("p");
            category.className = "product-category";
            category.textContent = product.category;

            let description = document.createElement("p");
            description.className = "product-description";
            description.textContent = product.description.slice(0, 120);

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(description);

            container.appendChild(card);
        });

    })
    .catch(function(error) {
        errorMessage.textContent = "Error: " + error.message;
        console.log(error);
    })
    .finally(function() {
        console.log("API called");
    });
