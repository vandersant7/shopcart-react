import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Grid,
    Typography,
    Button,
    IconButton,
    TextField,
    CircularProgress,
    CardMedia,
    Container,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "../../../context/CartContext/useCart";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleQuantityChange = (delta) => setQuantity((prev) => Math.max(prev + delta, 1));

    const handleAddToCart = () => addToCart({ ...product, quantity });

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!product) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <Typography variant="h6">Produto não encontrado.</Typography>
            </Box>
        );
    }

    return (
        <Container maxWidth="lg">

            <Grid container spacing={2} mt={10}
                sx={{
                    alignItems: "stretch"
                }}
            >

                <Grid item size={{
                    xs: 12,
                    md: 8
                }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >

                    <CardMedia
                        component="img"
                        height="400"
                        image={product.image}
                        alt={product.title}
                        sx={{
                            objectFit: 'contain'
                        }}
                    />


                </Grid>

                <Grid item size={{
                    xs: 12,
                    md: 4
                }}

                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                mb: 2,
                                textAlign: {
                                    xs: "center",
                                    md: "left"
                                },
                                fontSize: {
                                    xs: "1.5rem",
                                    md: "2rem"
                                },
                                fontWeight: "bold"
                            }}
                        >
                            {product.title}
                        </Typography>

                        <Typography variant="h3" mx="auto" color="primary" sx={{ mb: 3 }}>
                            {formatCurrency(product.price)}
                        </Typography>



                        {/* Controle de quantidade */}
                        <Box mx="auto" sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
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

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            onClick={handleAddToCart}
                        >
                            Comprar
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={10} xs={12}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Detalhes do Produto
                </Typography>
                <Typography variant="body1" color="text.secondary" fontSize="1.2rem" >
                    {product.description}
                </Typography>
            </Grid>
        </Container>
    );
}