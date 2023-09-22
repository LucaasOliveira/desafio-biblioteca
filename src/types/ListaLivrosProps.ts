import { Livro } from "./Livro";

export interface ListaLivrosProps {
  livros: Livro[];
  onEdit: (livro: Livro) => void;
  onDelete: (livro: Livro) => void;
}
