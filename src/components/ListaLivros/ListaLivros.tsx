import React from "react";
import { ListaLivrosProps } from "../../types/ListaLivrosProps";

const ListaLivros: React.FC<ListaLivrosProps> = ({
  livros,
  onEdit,
  onDelete
}) => {
  return (
    <div>
      <h2>Livros Cadastrados</h2>
      <ul>
        {livros.map((livro, index) =>
          <li key={index}>
            <strong>Título:</strong> {livro.titulo} <br />
            <strong>Autor:</strong> {livro.autor}
            <br />
            <strong>Ano de Publicação:</strong> {livro.anoPublicacao} <br />
            <strong>Data de Cadastro:</strong> {livro.dataCadastro} <br />
            <strong>Gênero:</strong> {livro.genero} <br />
            <strong>Descrição:</strong> {livro.descricao} <br />
            <button onClick={() => onEdit(livro)}>Editar</button>
            <button onClick={() => onDelete(livro)}>Excluir</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListaLivros;
