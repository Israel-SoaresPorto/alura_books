export default function valorTotalDeLivrosDisponiveis(listaDelivros) {
    const livrosDisponiveis = listaDelivros.filter(livro => livro.quantidade > 0);
    const valorTotal = livrosDisponiveis.reduce((acc, livro) => acc + livro.preco, 0);
    return valorTotal;
};