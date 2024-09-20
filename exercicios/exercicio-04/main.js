// -------------------------------------
//  Neste exercicio utilizo as APIs para acesso a camera e a localização
// -------------------------------------


let currentLocation = null;
let photos = JSON.parse(localStorage.getItem('photos')) || [];
const photoTableBody = document.querySelector('#photoTable tbody');

const uploadPhoto = document.getElementById('uploadPhoto');
const preview = document.getElementById('preview');

// Mostrar o preview da foto selecionada
uploadPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Exibe a imagem no lugar da câmera
            preview.src = e.target.result;
            preview.style.display = 'block'; // Mostra a imagem
            document.getElementById('video').style.display = 'none'; // Esconde o vídeo
        };
        reader.readAsDataURL(file);
    }
});

// Inicializar o mapa
const map = L.map('map').setView([-15.7801, -47.9292], 13); // Localização padrão
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Evento para obter localização
document.getElementById('getLocationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            currentLocation = [position.coords.latitude, position.coords.longitude];
            L.marker(currentLocation).addTo(map)
                .bindPopup('Sua localização')
                .openPopup();
            map.setView(currentLocation, 13);
        });
    } else {
        alert('Geolocalização não é suportada neste navegador.');
    }
});

// Evento para upload de imagem
document.getElementById('uploadPhoto').addEventListener('change', event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        displayUploadedPhoto(e.target.result);
    }
    reader.readAsDataURL(file);
});


// Salvar a foto e a localização
document.getElementById('savePhotoBtn').addEventListener('click', () => {
    const title = document.getElementById('photoTitle').value;
    const description = document.getElementById('photoDescription').value;

    if (!title || !currentLocation) {
        alert('Título e localização são obrigatórios.');
        return;
    }

    const photo = {
        id: Date.now(),
        title,
        description,
        location: currentLocation,
        date: new Date().toLocaleString(),
        image: document.getElementById('uploadedImage').src,
    };

    photos.push(photo);
    localStorage.setItem('photos', JSON.stringify(photos));
    renderPhotoTable();
    resetForm();
});

// Renderizar a tabela de fotos
function renderPhotoTable() {
    photoTableBody.innerHTML = '';
    photos.forEach(photo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${photo.id}</td>
            <td>${photo.title}</td>
            <td>${photo.description}</td>
            <td>${photo.location.join(', ')}</td>
            <td>${photo.date}</td>
            <td>
                <button onclick="viewDetails(${photo.id})">Visualizar</button>
                <button onclick="deletePhoto(${photo.id})">Excluir</button>
            </td>
        `;
        photoTableBody.appendChild(row);
    });
}

// Visualizar detalhes da foto
function viewDetails(id) {
    const photo = photos.find(p => p.id === id);
    document.getElementById('modalImage').src = photo.image;
    document.getElementById('modalTitle').innerText = photo.title;
    document.getElementById('modalDescription').innerText = photo.description;

    const modalMap = L.map('modalMap').setView(photo.location, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(modalMap);
    L.marker(photo.location).addTo(modalMap).bindPopup('Localização da foto');

    document.getElementById('modal').style.display = 'block';
}

// Excluir a foto
function deletePhoto(id) {
    if (confirm('Você tem certeza que deseja excluir esta foto?')) {
        photos = photos.filter(p => p.id !== id);
        localStorage.setItem('photos', JSON.stringify(photos));
        renderPhotoTable();
    }
}

// Resetar o formulário
function resetForm() {
    document.getElementById('photoTitle').value = '';
    document.getElementById('photoDescription').value = '';
    currentLocation = null;
    document.getElementById('uploadedImage').style.display = 'none'; // Ocultar imagem
}

// Fechar o modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

// Renderiza a tabela ao carregar a página
renderPhotoTable();