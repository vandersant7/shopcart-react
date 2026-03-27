import { Box, Button, Grid, Typography } from "@mui/material";
import { useAuth } from "../../../context/AuthContext/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
export default function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // proteção
  if (!user) {
    return <Navigate to="/login" state={{ from: "/checkout" }} replace />;
  }

  const handleFinish = () => {
    alert("Pedido finalizado com sucesso! 🎉");
    navigate("/");
  };

  return (
        <Box sx={{ p: 4, mt: 10 }}>
      <Typography variant="h4" mb={3}>
        Checkout
      </Typography>

      <Grid container spacing={3}>
        {/* Formulário */}
        <Grid item xs={12} md={8}>
          <CheckoutForm />
        </Grid>

        {/* Resumo */}
        <Grid item xs={12} md={4}>
          <OrderSummary />

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleFinish}
          >
            Finalizar Pedido
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}