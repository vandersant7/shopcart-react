import { Box, Typography } from "@mui/material";

export default function FooterBrand() {
    return (
        <Box>
            <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
            >
                ShopCart
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    opacity: 0.8,
                    maxWidth: 350
                }}
            >
                Sua plataforma para encontrar os melhores produtos.
            </Typography>
        </Box>
    );
}