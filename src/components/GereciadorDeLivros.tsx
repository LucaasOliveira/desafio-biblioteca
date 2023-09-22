import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LivroForm from './LivroForm';
import ListaLivros from './ListaLivros';
import EditarLivroModal from './EditarLivroModal';
import ExcluirLivroModal from './ExcluirLivroModal';
import { Livro } from '../types/Livro';

const GerenciadorDeLivros: React.FC = () => {
  const [livro, setLivro] = useState<Livro>({
    id: uuidv4(),
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    dataCadastro: new Date().toLocaleDateString(),
    genero: '',
    descricao: '',
  });

  const [livros, setLivros] = useState<Livro[]>([]);
  const [livroEmEdicao, setLivroEmEdicao] = useState<Livro | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [livroParaExcluir, setLivroParaExcluir] = useState<Livro | null>(null);
  const [modalExclusaoIsOpen, setModalExclusaoIsOpen] = useState(false);

  useEffect(() => {
    const livrosArmazenados = JSON.parse(localStorage.getItem('livros') || '[]');
    setLivros(livrosArmazenados);
  }, []);

};

export default GerenciadorDeLivros;
