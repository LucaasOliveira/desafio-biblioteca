import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { Livro } from "../../types/Livro";
import LivroFormEdicao from "../LivroFormEdicao/LivroFormEdicao";

interface ListaLivrosProps {
  livros: Livro[];
  onEdit: (livro: Livro) => void;
  onDelete: (livro: Livro) => void;
}

const ListaLivros: React.FC<ListaLivrosProps> = ({
  livros,
  onEdit,
  onDelete
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    open: boolean;
    livro: Livro | null;
  }>({
    open: false,
    livro: null
  });

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [livroEdit, setLivroEdit] = useState<Livro | null>(null);

  const handleDelete = (livro: Livro) => {
    setDeleteConfirmation({ open: true, livro });
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation({ open: false, livro: null });
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation.livro) {
      onDelete(deleteConfirmation.livro);
      setDeleteConfirmation({ open: false, livro: null });
    }
  };

  const handleEdit = (livro: Livro) => {
    setLivroEdit(livro);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setLivroEdit(null);
    setEditDialogOpen(false);
  };

  const handleUpdateLivro = (livroAtualizado: Livro) => {
    if (livroEdit) {
      const livroIndex = livros.findIndex(livro => livro.id === livroEdit.id);

      if (livroIndex !== -1) {
        const livrosAtualizados = [...livros];
        livrosAtualizados[livroIndex] = livroAtualizado;

        onEdit(livroAtualizado);

        handleEditDialogClose();
      }
    }
  };

  return (
    <div>
      {livros.map(livro =>
        <Card key={livro.id}>
          <CardContent>
            <h3>
              {livro.titulo}
            </h3>
            <p>
              {livro.autor}
            </p>
            <p>
              {livro.anoPublicacao}
            </p>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleEdit(livro)}>Editar</Button>
            <Button onClick={() => handleDelete(livro)}>Excluir</Button>
          </CardActions>
        </Card>
      )}
      <Dialog
        open={deleteConfirmation.open}
        onClose={handleCancelDelete}
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
          <Button onClick={handleCancelDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        aria-labelledby="edit-dialog-title"
      >
        <DialogTitle id="edit-dialog-title">Editar Livro</DialogTitle>
        <DialogContent>
          {livroEdit &&
            <LivroFormEdicao
              livro={livroEdit}
              onChange={e => {
                const { name, value } = e.target;
                setLivroEdit(prevLivro => {
                  if (prevLivro) {
                    return { ...prevLivro, [name]: value };
                  }
                  return null;
                });
              }}
              onCancel={handleEditDialogClose}
              onSubmit={() => {
                handleUpdateLivro(livroEdit);
              }}
            />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListaLivros;
