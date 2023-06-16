import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <a href={link ? link : null}>
      <Card
        sx={{ maxWidth: 340, borderRadius: 5, minHeight: 170, height: "100%" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150px"
            image={imgUrl}
            alt={title}
            className="projects__img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
};

export default ProjectCard;
