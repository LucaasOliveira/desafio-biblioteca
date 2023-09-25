
import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle,DialogContentText } from '@mui/material';
import { LivroFormProps } from '../../types/LivroFormProps';

const LivroForm: React.FC<LivroFormProps> = ({ livro, onChange, onSubmit }) => {
  const [open, setOpen] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleAnoPublicacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      onChange(e);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    const anoAtual = new Date().getFullYear();

    if (livro.anoPublicacao > anoAtual) {
      setErrors({ anoPublicacao: 'O ano de publicação não pode ser no futuro.' });
      return;
    }

    if (livro.anoPublicacao > parseInt(livro.dataCadastro.split("/")[2])) {
      setErrors({ anoPublicacao: 'O ano de publicação não pode ser maior que o ano de cadastro.' });
      return;
    }

    onSubmit(e);
    setOpen(false);
    setErrors({});
  };

  return (
    <>
      <Button
        className="buttonCadastro"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Cadastre um livro
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Biblioteca Mágica</DialogTitle>
        <DialogContent>
          <DialogContentText>Cadastro de livro</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            label="Titulo"
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
            error={!!errors.anoPublicacao}
            helperText={errors.anoPublicacao}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Data Cadastro"
            fullWidth
            type="text"
            id="dataCadastro"
            name="dataCadastro"
            value={livro.dataCadastro}
            onChange={onChange}
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
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LivroForm;
