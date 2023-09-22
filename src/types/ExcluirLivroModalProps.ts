import { Livro } from "./Livro";

export interface ExcluirLivroModalProps {
  isOpen: boolean;
  onClose: () => void;
  livroParaExcluir: Livro | null;
  onExcluirConfirm: () => void;
}
