import {
  Drawer,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { useCart } from "../../../context/useCart";
import CartItem from "./CartItem";
import { getCartTotal } from "../../../utils/cart";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function CartDrawer({ open, onClose }) {
  const { cart } = useCart();

  const total = getCartTotal(cart);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: {
            xs: "75vw", 
            md: "33vw",
          },
          p: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Carrinho
        </Typography>

        <Divider />

        {/* Lista de itens */}
        <Box sx={{ flex: 1, overflowY: "auto", mt: 2 }}>
          {cart.length === 0 ? (
            <Typography>Seu carrinho está vazio</Typography>
          ) : (
            cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          )}
        </Box>

        <Divider />

        {/* Footer */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            Total: {formatCurrency(total)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={cart.length === 0}
            onClick={() => {
              console.log("Ir para checkout"); // futuro
            }}
          >
            Finalizar Compra
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}