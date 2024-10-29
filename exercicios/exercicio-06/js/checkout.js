// Limpa o carrinho após finalizar a compra
function clearCart() {
    localStorage.removeItem("cart");
}

// Processa o checkout
function processCheckout(event) {
    event.preventDefault();

    // Obtém os dados do formulário
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("payment").value;

    // Verifica se o carrinho não está vazio
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        return; // Impede a finalização da compra
    }

    // Verifica se todos os campos do formulário estão preenchidos
    if (name && address && paymentMethod) {
        alert("Compra realizada com sucesso!");
        clearCart(); // Limpa o carrinho após a compra
        window.location.href = "index.html"; // Redireciona para a página inicial
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Adiciona o evento de submit ao formulário de checkout
document.getElementById("checkout-form").addEventListener("submit", processCheckout);