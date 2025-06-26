const sugestoes = {
    jantar: [
        "Armazém - cozinha contemporânea e ambiente sofisticado",
        "Pastiera Bistro: italiano‐francês com coquetéis, ótimo para jantar com drinks",
        "Miyagi Sushi - Restaurante japonês com rodízio, buffet e opções à la carte"
    ],
    cafe: [
        "Boccata Caffè e Cucina – Clássico com ótimos croissants e pratos leves",
        "Coffee O’Clock – Estilo industrial, dois andares, serve cafés e drinks",
        "Café du Coin - Café especial, torrado e preparado no local, com ambiente acolhedor e intimista."
    ],
    festa: [
        "Arena Pub - Boa estrutura para curtir, dançar e socializar com conforto. Combina festa animada com toques de requinte.",
        "Head Hunter - Atmosfera intimista com visual contemporâneo e cardápio sofisticado. Boa escolha para quem prefere algo mais reservado, mas ainda chique.",
        `Boni Villa Steak House - Complexo gastronômico sofisticado com carnes nobres, sushi bar e wine cave.
Ambiente elegante, ideal para aniversários, confraternizações ou festas exclusivas.
Possui música ao vivo em alguns dias e excelente carta de vinhos.`
    ]
};

function sugerirLugar(tipo) {
    const lista = sugestoes[tipo];
    const sugestao = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById(`${tipo}-sugestao`).textContent = sugestao;
}
