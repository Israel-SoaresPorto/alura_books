export default function filtrarLivrosPorCategoria(listaDeLivros, categoria) {
    let livrosFiltrados = listaDeLivros.filter(livro => livro.categoria == categoria);
    return livrosFiltrados;
}