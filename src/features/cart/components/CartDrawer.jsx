import {
  Drawer,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../../context/useCart";
import CartItem from "./CartItem";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const { cart, getTotal } = useCart();
  const navigate = useNavigate();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: "75vw", md: "33vw" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header do Drawer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Typography variant="h6">Carrinho</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Lista de itens com scroll */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          {cart.length === 0 ? (
            <Typography>Seu carrinho está vazio</Typography>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </Box>

        <Divider />

        {/* Footer fixo */}
        <Box
          sx={{
            p: 2,
            mt: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight="bold">Total:</Typography>
            <Typography fontWeight="bold">
              {formatCurrency(getTotal())}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={cart.length === 0}
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Finalizar Compra
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}