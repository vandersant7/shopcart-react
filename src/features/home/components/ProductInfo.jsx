import { Box, Typography, Button, IconButton, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "../../../context/useCart";
import { useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function ProductInfo({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => setQuantity((prev) => Math.max(prev + delta, 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h5" fontWeight="bold">
        {product.title}
      </Typography>

      <Typography variant="h6" color="primary">
        {formatCurrency(product.price)}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton color="primary" onClick={() => handleQuantityChange(-1)}>
          <Remove />
        </IconButton>
        <TextField
          value={quantity}
          inputProps={{ readOnly: true, style: { textAlign: "center" } }}
          sx={{ width: 60 }}
          variant="outlined"
          size="small"
        />
        <IconButton color="primary" onClick={() => handleQuantityChange(1)}>
          <Add />
        </IconButton>
      </Box>

      <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
        Comprar
      </Button>
    </Box>
  );
}