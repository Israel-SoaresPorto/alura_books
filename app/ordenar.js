export default function ordernarLivrosPorPreco(listaDeLivros) {
  const livrosOrdenados = listaDeLivros.sort((a, b) => a.preco - b.preco);
  console.log();
  return livrosOrdenados;
}
