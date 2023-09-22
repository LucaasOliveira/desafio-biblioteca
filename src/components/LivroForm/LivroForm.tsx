import React from "react";
import { LivroFormProps } from "../../types/LivroFormProps";
import { Button, StyledLabel } from "./styled";

const LivroForm: React.FC<LivroFormProps> = ({ livro, onChange, onSubmit }) => {
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
      <div>
        <StyledLabel htmlFor="titulo">Título:</StyledLabel>
        <input
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
        <input
          type="text"
          id="autor"
          name="autor"
          value={livro.autor}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="anoPublicacao">Ano de Publicação:</StyledLabel>
        <input
          type="text"
          id="anoPublicacao"
          name="anoPublicacao"
          value={livro.anoPublicacao}
          onChange={handleAnoPublicacaoChange}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="dataCadastro">Data de Cadastro:</StyledLabel>
        <input
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
        <input
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
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={livro.descricao}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <Button type="submit">Adicionar Livro</Button>
      </div>
    </form>
  );
};

export default LivroForm;
