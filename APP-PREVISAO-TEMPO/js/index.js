const chavedaapi = "cd31863ae267407cb01212131232011";

const botaodebusca = document.querySelector(".btn-busca");

botaodebusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if(!cidade) return;

    const dados = await buscardadosdacidade(cidade);

    if(dados) preencherdadosnatela(dados, cidade);
});

async function buscardadosdacidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chavedaapi}&q=${cidade}&aqi=no&lang=pt`

    const response = await fetch(apiUrl);

    if (response.status !== 200) return

    const dados = response.json();

    return dados;
}

function preencherdadosnatela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidade = dados.current.wind_kph;
    const icone_condicao = dados.current.condition.icon

    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura} ºC`;

    document.getElementById("condicao").textContent = condicao;

    document.getElementById("humidade").textContent = `${humidade}%`;

    document.getElementById("velocidade-do-vento").textContent = `${velocidade}km/h`;

    document.getElementById("icone-condicao").setAttribute("scr", icone_condicao)
}