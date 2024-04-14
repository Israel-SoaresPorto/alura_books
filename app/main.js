import aplicarDesconto from "./desconto.js";
import disponibilidadeDeLivros from "./disponibilidade.js";
import exibirLivrosNaTela from "./exibirLivros.js";
import filtrarLivrosPorCategoria from "./filtroCategoria.js";
import ordernarLivrosPorPreco from "./ordenar.js";
import valorTotalDeLivrosDisponiveis from "./valorTotal.js";

let livros = [];
const secaoDeLivros = document.querySelector("#secaoDeLivros");
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const filtrarLivrosFront = document.querySelector("#btnFiltrarLivrosFront");
const filtrarLivrosBack = document.querySelector("#btnFiltrarLivrosBack");
const filtrarLivrosDados = document.querySelector("#btnFiltrarLivrosDados");
const filtrarLivrosDisponiveis = document.querySelector("#btnLivrosDisponiveis");
const ordenarPorPreco = document.querySelector("#btnOrdenarPorPreco");
const valorTotal = document.querySelector("#valor");

async function getBuscarLivrosDaAPI() {
  livros = await fetch(endpointAPI).then((res) => res.json());
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosComDesconto, secaoDeLivros);
  valorTotal.innerHTML = valorTotalDeLivrosDisponiveis(livrosComDesconto).toFixed(2);
}

filtrarLivrosFront.addEventListener("click", () => {
  let livrosFront = filtrarLivrosPorCategoria(livros, "front-end");
  secaoDeLivros.innerHTML = "";
  exibirLivrosNaTela(livrosFront, secaoDeLivros);
  valorTotal.innerHTML = valorTotalDeLivrosDisponiveis(livrosFront).toFixed(2);
});

filtrarLivrosBack.addEventListener("click", () => {
  let livrosBack = filtrarLivrosPorCategoria(livros, "back-end");
  secaoDeLivros.innerHTML = "";
  exibirLivrosNaTela(livrosBack, secaoDeLivros);
  valorTotal.innerHTML = valorTotalDeLivrosDisponiveis(livrosBack).toFixed(2);
});

filtrarLivrosDados.addEventListener("click", () => {
  let livrosDados = filtrarLivrosPorCategoria(livros, "dados");
  secaoDeLivros.innerHTML = "";
  exibirLivrosNaTela(livrosDados, secaoDeLivros);
  valorTotal.innerHTML = valorTotalDeLivrosDisponiveis(livrosDados).toFixed(2);
});

filtrarLivrosDisponiveis.addEventListener('click', ()=> {
  let livrosDisponiveis = disponibilidadeDeLivros(livros);
  secaoDeLivros.innerHTML = "";
  exibirLivrosNaTela(livrosDisponiveis, secaoDeLivros);
  valorTotal.innerHTML = valorTotalDeLivrosDisponiveis(livrosDisponiveis).toFixed(2);
});

ordenarPorPreco.addEventListener("click", () => {
  let livrosOrdenados = ordernarLivrosPorPreco(livros);
  secaoDeLivros.innerHTML = "";
  exibirLivrosNaTela(livrosOrdenados, secaoDeLivros);
  valorTotal.innerHTML = valorTotalDeLivrosDisponiveis(livrosOrdenados).toFixed(2);
});

getBuscarLivrosDaAPI();
