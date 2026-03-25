import { Box, Card, CardContent, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Box
      sx={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >

      <Card sx={{ width: 350, boxShadow: 3 }}
      >
        <CardContent>
          <Typography variant="h5" mb={2}>
            Login
          </Typography>
        </CardContent>

        <LoginForm />
      </Card>
    </Box>
  )
}