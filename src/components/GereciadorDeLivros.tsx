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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLivro((prevLivro) => ({ ...prevLivro, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const anoAtual = new Date().getFullYear();
    
    if (livro.anoPublicacao > anoAtual) {
      alert('O ano de publicação não pode ser no futuro.');
      return;
    }
    
    const livrosAtualizados = [...livros, livro];
    salvarELimparFormulario(livrosAtualizados);
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    if (livroEmEdicao) {
      const anoAtual = new Date().getFullYear();
      const anoPublicacao = livroEmEdicao.anoPublicacao;
      const anoCadastro = parseInt(
        livroEmEdicao.dataCadastro.split('/')[2],
        10
      );

      if (anoPublicacao > anoAtual) {
        alert('O ano de publicação não pode ser no futuro.');
        return;
      }

      if (anoPublicacao > anoCadastro) {
        alert('O ano de publicação não pode ser maior que o ano de cadastro.');
        return;
      }
    }

    const livrosAtualizados = livros.map((livroItem) =>
      livroItem.id === livroEmEdicao?.id ? livroEmEdicao : livroItem
    );

    salvarELimparFormulario(livrosAtualizados);
    fecharModalEdicao();
  };

  const salvarELimparFormulario = (livrosAtualizados: Livro[]) => {
    setLivros(livrosAtualizados);
    localStorage.setItem('livros', JSON.stringify(livrosAtualizados));
    limparFormulario();
  };

};

export default GerenciadorDeLivros;
