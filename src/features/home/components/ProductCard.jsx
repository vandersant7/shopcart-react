import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext/useCart";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        width: 250,
        m: 1,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        "&:hover": { boxShadow: 6 },
      }}
    >
      {/* Imagem e link para detalhes */}
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >

        <Box sx={{ position: "relative" }}>
          <CardMedia component="img"
            height="140"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: "contain", p: 1, backgroundColor: "#f5f5f5" }} />

          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "white",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          >
            <FavoriteBorder />
          </IconButton>
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            noWrap
            title={product.title}
          >
            {product.title}
          </Typography>
          <Box
            sx={{
              display: "inline-flex",
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              bgcolor: "primary.light",
              color: "white",
              fontWeight: 700,
            }}
          >
            {formatCurrency(product.price)}
          </Box>
        </CardContent>
      </Link>

      {/* Botão de adicionar ao carrinho */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <Button
          variant="contained"
          startIcon={<AddShoppingCart />}
          fullWidth
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      </Box>
    </Card>
  );
}