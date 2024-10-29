// cart.js

// Carrega e exibe itens do carrinho
async function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    
    // Verifica se o products.json pode ser acessado
    try {
        const response = await fetch("products.json");
        const products = await response.json();

        // Exibe os itens do carrinho
        cartContainer.innerHTML = cartItems.map(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return `<div>Produto não encontrado</div>`;
            
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

        // Calcula e exibe o total do carrinho
        const total = cartItems.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product ? product.price * item.quantity : 0);
        }, 0);

        document.getElementById("cart-total").textContent = `Total: R$${total.toFixed(2)}`;
    } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
        cartContainer.innerHTML = `<div>Erro ao carregar os produtos</div>`;
    }
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

// Carrega o carrinho ao iniciar a página
document.addEventListener("DOMContentLoaded", displayCart);