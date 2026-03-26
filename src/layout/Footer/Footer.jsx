import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1161b1",
        color: "#fff",
        mt: "auto",
        py: 3,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Marca */}
        <Typography variant="h6">
          ShopCart
        </Typography>

        {/* Links */}

        {/* Copyright */}
        <Typography variant="body2">
          © {new Date().getFullYear()} ShopCart. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}