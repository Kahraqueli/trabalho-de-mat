const sugestoes = {
    jantar: [
        "Restaurante Dona Flor - cozinha brasileira moderna",
        "La Trattoria - massas italianas artesanais",
        "Sushi Zen - rodízio japonês com vista para o mar"
    ],
    cafe: [
        "Café da Praça - ideal para manhãs tranquilas",
        "Bistrô Aroma - cafés especiais e doces caseiros",
        "Café Urbano - ambiente moderno e wi-fi rápido"
    ],
    festa: [
        "Club Neon - balada com DJ ao vivo",
        "Bar 42 - drinks e música ao vivo",
        "Terraço 360 - festas ao ar livre com vista da cidade"
    ]
};

function sugerirLugar(tipo) {
    const lista = sugestoes[tipo];
    const sugestao = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById(`${tipo}-sugestao`).textContent = sugestao;
}
