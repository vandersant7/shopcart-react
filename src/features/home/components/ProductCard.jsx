import { AddShoppingCart } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/useCart";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <Card component={Link}
            to={`/product/${product.id}`}
            sx={{
                width: 250,
                m: 1,
                boxShadow: 3,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                "&:hover": { boxShadow: 6 },
            }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 1, backgroundColor: "#f5f5f5" }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold" noWrap title={product.title}>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {formatCurrency(product.price)}
                </Typography>
            </CardContent>

            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                <IconButton
                    color="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}>
                    <AddShoppingCart />
                </IconButton>
            </Box>
        </Card>
    );
}