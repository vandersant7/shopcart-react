import { Box, Typography } from "@mui/material";
import { useAuth } from "../../../context/useAuth";
import { Navigate } from "react-router-dom";

export default function Checkout() {
  const { user } = useAuth();

  // proteção da rota
  if (!user) {
    return <Navigate to="/login" state={{ from: "/checkout" }} replace />;
  }

  return (
    <Box sx={{ p: 4, mt: 10 }}>
      <Typography variant="h4" mb={2}>
        Checkout
      </Typography>

      <Typography>
        Aqui será o fluxo de finalização da compra.
      </Typography>
    </Box>
  );
}