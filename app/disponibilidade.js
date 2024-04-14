export default function disponibilidadeDeLivros(listaDelivros) {
  const livrosDisponiveis = listaDelivros.filter((livro) => livro.quantidade > 0);
  return livrosDisponiveis;
}
