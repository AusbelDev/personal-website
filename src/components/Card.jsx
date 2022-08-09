import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  return (
    <Card
      sx={{ maxWidth: 345, height: "100%", backgroundColor: "transparent" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.project.image}
        alt={props.project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Status: {props.project.status}.
        </Button>
      </CardActions>
    </Card>
  );
}
