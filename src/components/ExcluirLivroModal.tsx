// Importa as dependências necessárias para o componente
import React from "react";
import Modal from "react-modal";
import { ExcluirLivroModalProps } from "../types/ExcluirLivroModalProps";

const ExcluirLivroModal: React.FC<ExcluirLivroModalProps> = ({
  isOpen,
  onClose,
  livroParaExcluir,
  onExcluirConfirm
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {livroParaExcluir &&
        <div>
          <h2>Excluir Livro</h2>
          <p>
            Tem certeza de que deseja excluir o livro "{livroParaExcluir.titulo}"?
          </p>
          <button onClick={onExcluirConfirm}>Sim, Excluir</button>{" "}
          <button onClick={onClose}>Cancelar</button>{" "}
        </div>}
    </Modal>
  );
};

export default ExcluirLivroModal;
