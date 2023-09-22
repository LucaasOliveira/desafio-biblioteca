import React from "react";
import { LivroFormProps } from "../../types/LivroFormProps";

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
        <label htmlFor="titulo">Título:</label>
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
        <label htmlFor="autor">Autor:</label>
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
        <label htmlFor="anoPublicacao">Ano de Publicação:</label>
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
        <label htmlFor="dataCadastro">Data de Cadastro:</label>
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
        <label htmlFor="genero">Gênero:</label>
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
        <label htmlFor="descricao">Descrição:</label>
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
        <button type="submit">Adicionar Livro</button>
      </div>
    </form>
  );
};

export default LivroForm;
