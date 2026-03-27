import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const fields = [
  { label: "Nome completo", name: "nome" },
  { label: "Endereço", name: "endereco" },
  { label: "Cidade", name: "cidade" },
  { label: "CEP", name: "cep" },
]

export default function CheckoutForm() {
  const { formData, setFormData } = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <Box sx={{ p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h6" mb={2}>
        Dados de Entrega
      </Typography>

      <Box element="form" display="flex" flexDirection="column" gap={2}>
        {fields.map((field) =>
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name]|| ""}
            onChange={handleChange}
            fullWidth
          />)}
      </Box>
    </Box>
  );
}