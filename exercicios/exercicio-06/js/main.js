let products = []; // Array para armazenar os produtos

async function loadProducts() {
    const productList = document.getElementById("product-list");
    try {
        const response = await fetch("products.json");
        products = await response.json(); // Armazena os produtos no array global

        displayProducts(products); // Exibe todos os produtos inicialmente
    } catch (error) {
        productList.innerHTML = "<p>Erro ao carregar produtos. Tente novamente mais tarde.</p>";
        console.error("Erro ao carregar produtos:", error);
    }
}

function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = products.map(product => `
        <div class="product-item">
            <img src="img/${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>R$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            <button onclick="window.location.href='product-details.html?id=${product.id}'">Ver Detalhes</button>
        </div>
    `).join("");
}

function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const categoryValue = document.getElementById("category-filter").value;
    const brandValue = document.getElementById("brand-filter").value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchValue) || 
                              product.description.toLowerCase().includes(searchValue);
        const matchesCategory = !categoryValue || product.category === categoryValue; // Considera a categoria se não estiver vazia
        const matchesBrand = !brandValue || product.brand === brandValue; // Considera a marca se não estiver vazia

        return matchesSearch && matchesCategory && matchesBrand;
    });

    displayProducts(filteredProducts); // Exibe os produtos filtrados
}

// Adiciona produto ao carrinho
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
}

// Exibe o carrinho com itens armazenados
async function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const response = await fetch("products.json");
    const products = await response.json();

    cartContainer.innerHTML = cartItems.map(item => {
        const product = products.find(p => p.id === item.id);
        return `
            <div class="cart-item">
                <h3>${product.name}</h3>
                <p>Preço: R$${product.price.toFixed(2)}</p>
                <p>Quantidade: 
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                </p>
                <button onclick="removeFromCart(${item.id})">Remover</button>
            </div>
        `;
    }).join("");

    const total = cartItems.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.price * item.quantity);
    }, 0);

    document.getElementById("cart-total").textContent = `Total: R$${total.toFixed(2)}`;
}

// Atualiza a quantidade de um produto no carrinho
function updateQuantity(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity = parseInt(quantity, 10);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

// Remove produto do carrinho
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Limpa o carrinho após finalizar a compra
function clearCart() {
    localStorage.removeItem("cart");
}

// Processa o checkout
function processCheckout(event) {
    event.preventDefault();
    alert("Compra realizada com sucesso!");
    clearCart();
    window.location.href = "index.html"; // Redireciona para a página inicial
}

// Inicializa a carga de produtos ou o carrinho
document.addEventListener("DOMContentLoaded", loadProducts);