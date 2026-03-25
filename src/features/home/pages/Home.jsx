import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Box, TextField } from "@mui/material";
import ProductList from "../components/ProductList";

export default function Home() {
    const url = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));

    }, []);

    const filteredProducts = products
        ?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <Box sx={{ p: 2 }}>
            <Hero />

            <TextField
                label="Buscar produto"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ProductList products={filteredProducts} />
        </Box>
    );
}