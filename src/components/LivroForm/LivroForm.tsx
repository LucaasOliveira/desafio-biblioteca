import React from "react";
import { LivroFormProps } from "../../types/LivroFormProps";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { StyledInput, StyledLabel } from "./styled";

const LivroForm: React.FC<LivroFormProps> = ({ livro, onChange, onSubmit }) => {
  const [open, setOpen] = React.useState(false);

  const handleAnoPublicacaoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      onChange(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <StyledLabel htmlFor="titulo">Título:</StyledLabel>
            <StyledInput
              type="text"
              id="titulo"
              name="titulo"
              value={livro.titulo}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="autor">Autor:</StyledLabel>
            <StyledInput
              type="text"
              id="autor"
              name="autor"
              value={livro.autor}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="anoPublicacao">
              Ano de Publicação:
            </StyledLabel>
            <StyledInput
              type="text"
              id="anoPublicacao"
              name="anoPublicacao"
              value={livro.anoPublicacao}
              onChange={handleAnoPublicacaoChange}
              required
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <StyledLabel htmlFor="dataCadastro">Data de Cadastro:</StyledLabel>
            <StyledInput
              type="text"
              id="dataCadastro"
              name="dataCadastro"
              value={livro.dataCadastro}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="genero">Gênero:</StyledLabel>
            <StyledInput
              type="text"
              id="genero"
              name="genero"
              value={livro.genero}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="descricao">Descrição:</StyledLabel>
            <StyledInput
              type="text"
              id="descricao"
              name="descricao"
              value={livro.descricao}
              onChange={onChange}
              required
            />
          </div>
        </Grid>
      </Grid>

      <div>
        <Button
          variant="contained"
          type="submit"
          sx={{
            margin: "20px",
          }}
        >
          Adicionar Livro
        </Button>
      </div>
    </form>
  );
};

export default LivroForm;
