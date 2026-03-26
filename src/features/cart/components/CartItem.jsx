import { Box, Typography, CardMedia, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrency } from "../../../utils/formatCurrency";
import { useCart } from "../../../context/useCart";

export default function CartItem({ item }) {
    const { incrementItem, decrementItem, removeFromCart } = useCart();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 2,
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{ width: 60, height: 60, objectFit: "contain" }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" noWrap title={item.title}>
          {item.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {formatCurrency(item.price)} x {item.quantity || 1}
        </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={() => decrementItem(item.id)}>
          <RemoveIcon />
        </IconButton>
        <Typography>{item.quantity}</Typography>
        <IconButton onClick={() => incrementItem(item.id)}>
          <AddIcon />
        </IconButton>

        <IconButton color="error" onClick={() => removeFromCart(item.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
      </Box>
    </Box>
  );
}