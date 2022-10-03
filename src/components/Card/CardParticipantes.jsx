import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CardParcipantes(props) {
  console.log(props);
  return (
    <Card sx={{ display: "flex", maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Psicóloga formada pela PUC-SP, com especialização em Saúde
          Materno-Infantil pela UNIFESP. Tem experiência com atendimento de
          gestantes e puérperas e questões relacionadas a parentalidade.
          Trabalha a partir da Fenomenologia-Existencial Crítica e atualmente
          tenho como foco o público feminino, negro e lgbtqia+.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
    </Card>
  );
}
