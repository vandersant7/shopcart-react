import { Box, Typography, Divider } from "@mui/material";
import { useCart } from "../../../context/CartContext/useCart";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function OrderSummary() {
  const { cart, getTotal } = useCart();

  return (
    <Box sx={{ p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h6" mb={2}>
        Resumo do Pedido
      </Typography>

      {cart.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>
            {item.title} x{item.quantity}
          </Typography>
          <Typography>
            {formatCurrency(item.price * item.quantity)}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="bold">Total:</Typography>
        <Typography fontWeight="bold">
          {formatCurrency(getTotal())}
        </Typography>
      </Box>
    </Box>
  );
}