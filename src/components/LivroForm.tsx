import React from "react";
import { LivroFormProps } from "../types/LivroFormProps";

const LivroForm: React.FC<LivroFormProps> = ({ livro, onChange, onSubmit }) => {
  const handleAnoPublicacaoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      onChange(e);
    }
  };

};

export default LivroForm;
