import { Livro } from "./Livro";

export interface EditarLivroModalProps {
  isOpen: boolean;
  onClose: () => void;
  livroEmEdicao: Livro | null;
  onEditChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onEditSubmit: (e: React.FormEvent) => void;
}
