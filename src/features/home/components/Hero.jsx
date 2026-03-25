import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroImage from "../../../assets/hero.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "50vh", md: "60vh" },
        display: "flex",
        alignItems: "center",
        color: "#fff",
        mb: 4,

        // overlay
        background: `linear-gradient(
          rgba(0,0,0,0.5),
          rgba(0,0,0,0.5)
        ), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Bem-vindo à ShopCart
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Encontre os melhores produtos com os melhores preços.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ width: "fit-content", mt: 2 }}
            onClick={() => navigate("/")}
          >
            Explorar Produtos
          </Button>
        </Box>
      </Container>
    </Box>
  );
}