import { Livro } from "./Livro";

export interface LivroFormEdicaoProps {
  livro: Livro;
  onCancel: () => void;
  onSubmit: (livroAtualizado: Livro) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
