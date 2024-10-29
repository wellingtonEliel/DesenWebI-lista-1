// checkout.js

// Limpa o carrinho após finalizar a compra
function clearCart() {
    localStorage.removeItem("cart");
}

// Processa o checkout
function processCheckout(event) {
    event.preventDefault();

    // Simulando a captura de dados de checkout
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("payment").value;

    if (name && address && paymentMethod) {
        alert("Compra realizada com sucesso!");
        clearCart();
        window.location.href = "index.html"; // Redireciona para a página inicial
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

document.getElementById("checkout-form").addEventListener("submit", processCheckout);