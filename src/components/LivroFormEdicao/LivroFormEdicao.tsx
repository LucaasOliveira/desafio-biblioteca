import React, { FormEvent, useState } from "react";
import { LivroFormEdicaoProps } from "../../types/LivroFormEdicaoProps";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";

const LivroFormEdicao: React.FC<
  LivroFormEdicaoProps & { onCancel: () => void }
> = ({ livro, onChange, onSubmit, onCancel }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnoPublicacaoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      if (
        name === "anoPublicacao" &&
        parseInt(value) > new Date().getFullYear()
      ) {
        return;
      }

      if (onChange) {
        onChange(e);
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    await onSubmit(livro);
    onCancel();
  };

  return (
    <Dialog open={true} onClose={onCancel} aria-labelledby="edit-dialog-title">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="edit-dialog-title">Editar Livro</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            label="Título"
            variant="outlined"
            type="text"
            id="titulo"
            name="titulo"
            value={livro.titulo}
            onChange={onChange}
            required
          />
          <TextField
            margin="dense"
            id="autor"
            label="Autor"
            fullWidth
            variant="outlined"
            type="text"
            name="autor"
            value={livro.autor}
            onChange={onChange}
            required
          />
          <TextField
            margin="dense"
            label="Gênero"
            fullWidth
            variant="outlined"
            required
            type="text"
            id="genero"
            name="genero"
            value={livro.genero}
            onChange={onChange}
          />
          <TextField
            margin="dense"
            label="Ano de publicação"
            fullWidth
            variant="outlined"
            name="anoPublicacao"
            type="number"
            id="anoPublicacao"
            value={livro.anoPublicacao}
            onChange={handleAnoPublicacaoChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            label="Descrição"
            fullWidth
            variant="outlined"
            type="text"
            id="descricao"
            name="descricao"
            value={livro.descricao}
            onChange={onChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LivroFormEdicao;
