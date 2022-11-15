import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

import api from "../../services/api";

import { toast } from "react-toastify";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import Cookies from "js-cookie";

export default function Registrar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dtCriacao, setDtCriacao] = useState(new Date());
  const [tag, setTag] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  /* 
  const handleFile = (e) => {
    // image preview
    const image = e.target.files[0];

    setPreviewImage(image);

    // change image state
    setImage(image);
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();

    /*     if (image) {
      const formData = new FormData();

      formData.append("file", image);

      api
        .post("/api/upload", formData, {
          headers: {
            authorization: Cookies.get("token"),
          },
        })
        .then(async (response) => {
          const photo = await response.data;
          console.log(response);
          await setUrlImagem(photo);
        })
        .catch((error) => {
          toast.error("Ocorreu um erro, tente novamente mais tarde!");
          console.error(error);
          return;
        });
    } */

    const data = {
      titulo,
      descricao,
      dt_criacao: dtCriacao,
      tag,
      url_imagem: urlImagem,
    };

    api
      .post("/api/artigos", data, {
        headers: {
          authorization: Cookies.get("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setTitulo("");
        setDescricao("");
        setTag("");
        setUrlImagem("");
        toast.success("Artigo cadastrado com sucesso");
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar, tente novamente mais tarde!");
        console.error(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                required
                name="titulo"
                id="titulo"
                label="Título"
                autoFocus
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                required
                id="outlined-textarea"
                label="Descrição"
                multiline
                rows={4}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id="select-tag">Tag</InputLabel>
                <Select
                  labelId="select-tag"
                  id="select-tag"
                  value={tag}
                  label="Tag"
                  onChange={(e) => setTag(e.target.value)}
                >
                  <MenuItem value={"Apresentação"}>Apresentação</MenuItem>
                  <MenuItem value={"Aprendizado"}>Aprendizado</MenuItem>
                  <MenuItem value={"Cultura"}>Cultura</MenuItem>
                  <MenuItem value={"Educação"}>Educação</MenuItem>
                  <MenuItem value={"Programação"}>Programação</MenuItem>
                  <MenuItem value={"Tecnologia"}>Tecnologia</MenuItem>
                  <MenuItem value={"Zonas Rurais"}>Zonas Rurais</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="url_imagem"
                id="url_imagem"
                label="Digite a URL da sua imagem"
                value={urlImagem}
                onChange={(e) => setUrlImagem(e.target.value)}
              />
              {/* <Button fullWidth variant="contained" component="label">
                Upload
                <input
                  id="file"
                  name="file"
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleFile}
                />
              </Button>
              {(image || previewImage) && (
                <img
                  className="profile-image"
                  src={
                    previewImage
                      ? URL.createObjectURL(previewImage)
                      : `${image}`
                  }
                  alt="nome"
                />
              )} */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
