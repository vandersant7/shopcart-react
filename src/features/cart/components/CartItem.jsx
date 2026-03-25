import { Box, Typography, CardMedia } from "@mui/material";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function CartItem({ item }) {
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
      </Box>
    </Box>
  );
}