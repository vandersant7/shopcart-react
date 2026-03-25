import { CardMedia } from "@mui/material";

export default function ProductImage({ image, title }) {
  return (
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{
        width: "100%",
        maxHeight: 500,
        objectFit: "contain",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
      }}
    />
  );
}