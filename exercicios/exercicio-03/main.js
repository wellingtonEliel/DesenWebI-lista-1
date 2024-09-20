document.getElementById('imageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const quantity = document.getElementById('quantity').value;

    // Validação
    if (width <= 0 || height <= 0) {
        alert('A largura e altura devem ser valores positivos.');
        return;
    }

    generateImages(width, height, quantity);
});

function generateImages(width, height, quantity) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = ''; // Limpar o grid antes de adicionar as novas imagens

    for (let i = 0; i < quantity; i++) {
        fetch(`https://picsum.photos/${width}/${height}.webp`)
            .then(response => {
                const imgUrl = response.url;

                const imgElement = document.createElement('div');
                imgElement.className = 'image-container';

                imgElement.innerHTML = `
                    <img src="${imgUrl}" alt="Imagem aleatória ${i+1}" />
                    <div class="image-actions">
                        <button onclick="downloadImage('${imgUrl}')">Baixar</button>
                        <a href="https://wa.me/?text=Veja esta imagem: ${imgUrl}" target="_blank">Compartilhar</a>
                        <button onclick="copyLink('${imgUrl}')">Copiar link</button>
                    </div>
                `;
                
                imageGrid.appendChild(imgElement);
            })
            .catch(err => console.error('Erro ao carregar a imagem:', err));
    }
}

// Baixar a imagem
function downloadImage(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.webp';
    link.click();
}

// Copiar link
function copyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para a área de transferência!');
    }, (err) => {
        console.error('Erro ao copiar o link: ', err);
    });
}