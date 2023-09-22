import React from "react";
import Modal from "react-modal";
import LivroFormEdicao from "../LivroFormEdicao/LivroFormEdicao";
import { EditarLivroModalProps } from "../../types/EditarLivroModalProps";

const EditarLivroModal: React.FC<EditarLivroModalProps> = ({
  isOpen,
  onClose,
  livroEmEdicao,
  onEditChange,
  onEditSubmit
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <h2>Editar Livro</h2>
        <LivroFormEdicao
          livro={
            livroEmEdicao || {
              id: "",
              titulo: "",
              autor: "",
              anoPublicacao: 0,
              dataCadastro: "",
              genero: "",
              descricao: ""
            }
          }
          onChange={onEditChange}
          onSubmit={onEditSubmit}
        />
        <button onClick={onClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default EditarLivroModal;
