import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 2,
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </Box>
  );
}