import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import LivroForm from "../LivroForm/LivroForm";
import ListaLivros from "../ListaLivros/ListaLivros";
import { Livro } from "../../types/Livro";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography
} from "@mui/material";
import LivroFormEdicao from "../LivroFormEdicao/LivroFormEdicao";
import styled from "styled-components";

const Title = styled.h3`
  margin: 30px;
  color: #ffffff;

`;

const GerenciadorDeLivros: React.FC = () => {
  const [livro, setLivro] = useState<Livro>({
    id: uuidv4(),
    titulo: "",
    autor: "",
    anoPublicacao: 0,
    dataCadastro: new Date().toLocaleDateString(),
    genero: "",
    descricao: ""
  });

  const [livros, setLivros] = useState<Livro[]>([]);
  const [livroEmEdicao, setLivroEmEdicao] = useState<Livro | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isLivroFormEdicaoOpen, setIsLivroFormEdicaoOpen] = useState(false);

  useEffect(() => {
    const livrosArmazenados = JSON.parse(
      localStorage.getItem("livros") || "[]"
    );
    setLivros(livrosArmazenados);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLivro(prevLivro => ({
      ...prevLivro,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const anoAtual = new Date().getFullYear();
    const anoCadastro = parseInt(livro.dataCadastro.split("/")[2]);

    if (livro.anoPublicacao > anoAtual) {
      alert("O ano de publicação não pode ser no futuro.");
      return;
    }

    if (livro.anoPublicacao > anoCadastro) {
      alert("O ano de publicação não pode ser maior que o ano de cadastro.");
      return;
    }

    const livrosAtualizados = [...livros, livro];
    salvarELimparFormulario(livrosAtualizados);

    setLivroEmEdicao(null);
    setEditDialogOpen(false);
    setIsLivroFormEdicaoOpen(true);
  };

  const salvarELimparFormulario = (livrosAtualizados: Livro[]) => {
    setLivros(livrosAtualizados);
    localStorage.setItem("livros", JSON.stringify(livrosAtualizados));
    limparFormulario();
  };

  const abrirModalEdicao = (livroItem: Livro | null) => {
    if (livroItem) {
      setLivroEmEdicao(livroItem);
      setIsLivroFormEdicaoOpen(true);
    } else {
      setLivroEmEdicao(null);
    }
  };

  const limparFormulario = () => {
    setLivro({
      id: uuidv4(),
      titulo: "",
      autor: "",
      anoPublicacao: 0,
      dataCadastro: new Date().toLocaleDateString(),
      genero: "",
      descricao: ""
    });
  };

  const confirmarExclusao = (livroItem: Livro) => {
    setDeleteConfirmation({
      open: true,
      livro: livroItem
    });
  };

  const excluirLivro = () => {
    if (deleteConfirmation.livro) {
      const livroExcluir = deleteConfirmation.livro;
      const livrosAtualizados = livros.filter(
        livro => livro.id !== livroExcluir.id
      );
      salvarELimparFormulario(livrosAtualizados);
      setDeleteConfirmation({
        open: false,
        livro: null
      });
    }
  };

  const handleUpdateLivro = () => {
    if (livroEmEdicao) {
      const livroIndex = livros.findIndex(
        livro => livro.id === livroEmEdicao.id
      );

      if (livroIndex !== -1) {
        const livrosAtualizados = [...livros];
        livrosAtualizados[livroIndex] = livroEmEdicao;

        salvarELimparFormulario(livrosAtualizados);
        setEditDialogOpen(false);
        setIsLivroFormEdicaoOpen(false);
      }
    }
  };

  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    open: boolean;
    livro: Livro | null;
  }>({
    open: false,
    livro: null
  });

  return (
    <>
    <Grid container>
    <Grid item xs={12} style={{ textAlign: 'center' }}>
      <Title>
      <Typography variant="h3">Gerenciador de Livros</Typography>
      </Title>
    </Grid>

    <Grid item xs={12}>
      <LivroForm
        livro={livro}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {livros.length > 0 &&
        <ListaLivros
          livros={livros}
          onEdit={abrirModalEdicao}
          onDelete={confirmarExclusao}
        />}
      <Dialog
        open={deleteConfirmation.open}
        onClose={() =>
          setDeleteConfirmation({
            open: false,
            livro: null
          })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza de que deseja excluir este livro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setDeleteConfirmation({
                open: false,
                livro: null
              })}
            color="primary"
          >
            Cancelar
          </Button>
          <Button onClick={excluirLivro} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      {isLivroFormEdicaoOpen &&
        livroEmEdicao &&
        <LivroFormEdicao
          livro={livroEmEdicao}
          onChange={handleChange}
          onCancel={() => setIsLivroFormEdicaoOpen(false)}
          onSubmit={handleUpdateLivro}
        />}
      </Grid>
      </Grid>
    </>
  );
};

export default GerenciadorDeLivros;
