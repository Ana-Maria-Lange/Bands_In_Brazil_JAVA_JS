const dadosSimulados = [
    { nome: "Armandinho", genero: "Reggae", dia: 12, mes: 1, local: "Florianópolis - SC" },
    { nome: "Djonga", genero: "Hip Hop", dia: 14, mes: 1, local: "Belo Horizonte - MG" },
    { nome: "Baco Exu do Blues", genero: "Hip Hop", dia: 20, mes: 1, local: "Salvador - BA" },
    { nome: "Beabadoobee", genero: "Indie/Alternativo", dia: 25, mes: 1, local: "São Paulo - SP" },
    { nome: "Tame Impala", genero: "Indie/Alternativo", dia: 5, mes: 2, local: "São Paulo - SP" },
    { nome: "Charlie Brown Jr", genero: "Rock", dia: 22, mes: 2, local: "Santos - SP" },
    { nome: "Kendrick Lamar", genero: "Hip Hop", dia: 10, mes: 3, local: "São Paulo - SP" },
    { nome: "The Neighbourhood", genero: "Indie/Alternativo", dia: 12, mes: 3, local: "Curitiba - PR" },
    { nome: "Pitty", genero: "Rock", dia: 15, mes: 3, local: "Curitiba - PR" },
    { nome: "Post Malone", genero: "Pop", dia: 21, mes: 3, local: "Allianz Parque - SP" },
    { nome: "Racionais MC's", genero: "Hip Hop", dia: 20, mes: 4, local: "Brasília - DF" },
    { nome: "Natiruts", genero: "Reggae", dia: 26, mes: 5, local: "Brasília - DF" },
    { nome: "Lana Del Rey", genero: "Indie/Alternativo", dia: 12, mes: 6, local: "Rio de Janeiro - RJ" },
    { nome: "Radiohead", genero: "Rock", dia: 2, mes: 7, local: "São Paulo - SP" },
    { nome: "Herbie Hancock", genero: "Jazz", dia: 15, mes: 7, local: "Porto Alegre - RS" },
    { nome: "Kamasi Washington", genero: "Jazz", dia: 20, mes: 8, local: "São Paulo - SP" },
    { nome: "SZA", genero: "Pop", dia: 14, mes: 9, local: "São Paulo - SP" },
    { nome: "System of a Down", genero: "Rock", dia: 10, mes: 10, local: "São Paulo - SP" },
    { nome: "Rihanna", genero: "Pop", dia: 20, mes: 10, local: "Fortaleza - CE" },
    { nome: "Ariana Grande", genero: "Pop", dia: 15, mes: 11, local: "Brasília - DF" },
    { nome: "Eminem", genero: "Hip Hop", dia: 28, mes: 11, local: "São Paulo - SP" },
    { nome: "Deftones", genero: "Rock", dia: 12, mes: 11, local: "Rio de Janeiro - RJ" },
    { nome: "Travis Scott", genero: "Hip Hop", dia: 10, mes: 12, local: "Rio de Janeiro - RJ" },
    { nome: "Linkin Park", genero: "Rock", dia: 15, mes: 12, local: "São Paulo - SP" }
];

function exibirBandas(lista) {
    const container = document.getElementById('lista-bandas');
    if(!container) return;
    container.innerHTML = ""; 

    if (lista.length === 0) {
        container.innerHTML = `<p class="no-results">Nenhum resultado encontrado. 🔍</p>`;
        return;
    }

    const listaOrdenada = [...lista].sort((a, b) => {
        const dataA = new Date(2026, a.mes - 1, a.dia);
        const dataB = new Date(2026, b.mes - 1, b.dia);
        return dataA - dataB;
    });

    listaOrdenada.forEach(banda => {
        const d = String(banda.dia).padStart(2, '0');
        const m = String(banda.mes).padStart(2, '0');
        const dataFormatada = `${d}/${m}/2026`;

        const card = `
            <div class="card-banda">
                <div class="card-header-color" data-genero="${banda.genero}"></div>
                <div class="card-content">
                    <span class="tag-genero">${banda.genero}</span>
                    <h3>${banda.nome}</h3>
                    <p class="info-local">📍 ${banda.local}</p>
                    <p class="info-data">📅 ${dataFormatada}</p>
                    <button class="btn-detalhes" onclick="verEvento('${banda.nome}', '${dataFormatada}', '${banda.local}')">
                        Infos & ingressos
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buscarBanda() {
    const t = document.getElementById('inputBusca').value.toLowerCase();
    const f = dadosSimulados.filter(b => 
        b.nome.toLowerCase().includes(t) || b.genero.toLowerCase().includes(t) || b.local.toLowerCase().includes(t)
    );
    exibirBandas(f);
}

function filtrar(tipo) {
    const hoje = new Date(2026, 0, 8); 
    if (tipo === 'todos') {
        exibirBandas(dadosSimulados);
    } else {
        const limite = tipo === '7dias' ? 7 : 30;
        const dataLimite = new Date(hoje);
        dataLimite.setDate(hoje.getDate() + limite);
        const filtrados = dadosSimulados.filter(b => {
            const d = new Date(2026, b.mes - 1, b.dia);
            return d >= hoje && d <= dataLimite;
        });
        exibirBandas(filtrados);
    }
}

function verEvento(n, d, l) {
    localStorage.setItem('vNome', n);
    localStorage.setItem('vData', d);
    localStorage.setItem('vLocal', l);
    window.location.href = 'evento.html';
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    window.location.reload();
}

window.onload = () => {
    const user = localStorage.getItem('usuarioLogado');
    if(user && document.getElementById('user-display')) {
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('user-logged').style.display = 'flex';
        document.getElementById('user-display').innerText = `Olá, ${user}`;
    }
    exibirBandas(dadosSimulados);
};