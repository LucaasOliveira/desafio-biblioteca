import React from "react";
import Grid from "@mui/material/Grid";
import { ListaLivrosProps } from "../../types/ListaLivrosProps";
import "./StyledCard.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Paper from "@mui/material/Paper";

const ListaLivros: React.FC<ListaLivrosProps> = ({
  livros,
  onEdit,
  onDelete,
}) => {
  return (
    // <div>
    //   <h2>Livros Cadastrados</h2>
    //   <ul>
    //     {livros.map((livro, index) => (
    //       <li key={index}>
    //         <strong>Título:</strong> {livro.titulo} <br />
    //         <strong>Autor:</strong> {livro.autor}
    //         <br />
    //         <strong>Ano de Publicação:</strong> {livro.anoPublicacao} <br />
    //         <strong>Data de Cadastro:</strong> {livro.dataCadastro} <br />
    //         <strong>Gênero:</strong> {livro.genero} <br />
    //         <strong>Descrição:</strong> {livro.descricao} <br />
    //         <button onClick={() => onEdit(livro)}>Editar</button>
    //         <button onClick={() => onDelete(livro)}>Excluir</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <Grid item xs={12}>
      <Grid xs={12} className="container">
        {livros.map((livro, index) => (
          <Paper className="card" key={index}>
            <div className="content">
              <h3>Título:</h3>
              <h4> {livro.titulo}</h4>
              <h3>Autor:</h3>
              <h5>{livro.autor}</h5>
              <h3>Ano de publicação:</h3>
              <h5>{livro.anoPublicacao}</h5>
              <h3>Gênero:</h3>
              <h5>{livro.genero}</h5>
              <h3>Descrição:</h3>
              <h5>{livro.descricao}</h5>
              <IconButton
                onClick={() => onDelete(livro)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => onEdit(livro)}
                edge="end"
                aria-label="edit"
                sx={{ paddingRight: "20px" }}
              >
                <CreateIcon />
              </IconButton>
            </div>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default ListaLivros;
