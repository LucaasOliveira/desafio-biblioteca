import React from "react";
import { LivroFormProps } from "../../types/LivroFormProps";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { StyledLabel } from "./styled";

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    ///////////////// Antigo
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
//////////////////////////////

//Modal de cadastro está com erro pq não entendo o htmlFor, está comentado ali, mas não funciona ali onde coloquei
//     <>
//       <Button
//         className="buttonCadastro"
//         variant="outlined"
//         onClick={handleClickOpen}
//       >
//         Cadastre um livro
//       </Button>
//       <Dialog open={open} onClose={handleClose} onSubmit={onSubmit}>
//         <DialogTitle>Biblioteca Mágica</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Cadastro de livro</DialogContentText>
//           <TextField
//             //htmlFor="titulo"
//             autoFocus
//             margin="dense"
//             fullWidth
//             label="Titulo"
//             variant="outlined"
//             type="text"
//             id="titulo"
//             name="titulo"
//             value={livro.titulo}
//             onChange={onChange}
//             required
//           />
//           <TextField
//             // htmlFor="autor"
//             margin="dense"
//             id="autor"
//             label="Autor"
//             fullWidth
//             variant="outlined"
//             type="text"
//             name="autor"
//             value={livro.autor}
//             onChange={onChange}
//             required
//           />
//           <TextField
//             focused
//             margin="dense"
//             label="Gênero"
//             fullWidth
//             variant="outlined"
//             required
//             type="text"
//             id="genero"
//             name="genero"
//             value={livro.genero}
//             onChange={onChange}
//           />

//           <TextField
//             // htmlFor="anoPublicacao"
//             focused
//             margin="dense"
//             label="Ano de publicação"
//             fullWidth
//             variant="outlined"
//             name="anoPublicacao"
//             type="text"
//             id="anoPublicacao"
//             value={livro.anoPublicacao}
//             onChange={handleAnoPublicacaoChange}
//             required
//           />

//           <TextField
//             // htmlFor="dataCadastro"
//             focused
//             margin="dense"
//             label="Data Cadastro"
//             fullWidth
//             type="text"
//             id="dataCadastro"
//             name="dataCadastro"
//             value={livro.dataCadastro}
//             onChange={onChange}
//             required
//           />
//           <TextField
//             // htmlFor="descricao"
//             autoFocus
//             margin="dense"
//             label="Descrição"
//             fullWidth
//             variant="outlined"
//             type="text"
//             id="descricao"
//             name="descricao"
//             value={livro.descricao}
//             onChange={onChange}
//             required
//           />
//         </DialogContent>
//         <DialogActions>
//           {/* <Button onClick={handleClear}>Limpar</Button> */}
//           <Button onClick={handleClose}>Cancelar</Button>
//           <Button type="submit">Salvar</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

export default LivroForm;
