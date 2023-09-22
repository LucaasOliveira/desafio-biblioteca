import { Livro } from "./Livro";

export interface LivroFormProps {
  livro: Livro;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}
