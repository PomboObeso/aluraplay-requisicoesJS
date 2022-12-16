import { conectaAPI } from "./conectaAPI";
import constroiCard from "./mostraVideos";

async function buscaVideo(evento) {
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ));
}

const botaoPesquisa = document.querySelector("[data-botaoPesquisa]");

botaoPesquisa.addEventListener("click", evento => buscaVideo(evento))