// product-details.js

async function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id'); // Obtém o ID do produto da URL

    try {
        const response = await fetch("products.json");
        const products = await response.json();
        const product = products.find(p => p.id == productId); // Encontra o produto pelo ID

        if (product) {
            document.getElementById("product-name").textContent = product.name;
            document.getElementById("product-image").src = `img/${product.images[0]}`;
            document.getElementById("product-image").style.width = "300px"; // Define largura fixa
            document.getElementById("product-image").style.height = "auto"; // Mantém a proporção
            document.getElementById("product-description").textContent = product.description;
            document.getElementById("product-price").textContent = `R$${product.price.toFixed(2)}`;
        } else {
            document.body.innerHTML = "<p>Produto não encontrado.</p>";
        }
    } catch (error) {
        console.error("Erro ao carregar detalhes do produto:", error);
    }
}

function addToCart() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id == productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: parseInt(productId), quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
}

function goBack() {
    window.history.back();
}

// Carrega os detalhes do produto quando a página é carregada
document.addEventListener("DOMContentLoaded", loadProductDetails);