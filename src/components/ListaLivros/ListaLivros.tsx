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
  DialogTitle,
  Grid,
  Collapse,
  Typography
} from "@mui/material";
import { Livro } from "../../types/Livro";
import LivroFormEdicao from "../LivroFormEdicao/LivroFormEdicao";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListaLivrosProps } from "../../types/ListaLivrosProps";

const ListaLivros: React.FC<ListaLivrosProps> = ({
  livros,
  onEdit,
  onDelete
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    livro: Livro | null;
  }>({
    livro: null
  });

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [livroEdit, setLivroEdit] = useState<Livro | null>(null);
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const handleExpandClick = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleDelete = (livro: Livro) => {
    setDeleteConfirmation({ livro });
    setDeleteDialogOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation({ livro: null });
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation.livro) {
      onDelete(deleteConfirmation.livro);
      setDeleteConfirmation({ livro: null });
      setDeleteDialogOpen(false);
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

        if (editDialogOpen) {
          onEdit(livroAtualizado);
        }

        handleEditDialogClose();
      }
    }
  };

  return (
    <React.Fragment>
      <Grid container spacing={1} justifyContent="center">
        {livros.map(livro =>
          <Grid item xs={12} sm={6} md={4} lg={3} key={livro.id}>
            <Card
              sx={{
                minWidth: 275,
                maxWidth: 375,
                margin: 2
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  {livro.titulo}
                </Typography>
                <Typography variant="body1">
                  {livro.autor}
                </Typography>
                <Typography variant="body1">
                  {livro.anoPublicacao}
                </Typography>
                <Collapse
                  in={expanded === livro.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography variant="body1">
                    {livro.genero}
                  </Typography>
                  <Typography variant="body1">
                    {livro.descricao}
                  </Typography>
                </Collapse>
              </CardContent>
              <CardActions disableSpacing>
                <Button onClick={() => handleEdit(livro)}>Editar</Button>
                <Button onClick={() => handleDelete(livro)}>Excluir</Button>
                <IconButton
                  onClick={() => handleExpandClick(livro.id)}
                  aria-expanded={expanded === livro.id}
                  aria-label="show more"
                  style={{ marginLeft: "auto" }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>

      <Dialog
        open={deleteDialogOpen}
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
    </React.Fragment>
  );
};

export default ListaLivros;
