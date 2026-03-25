import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import CartDrawer from "../../features/cart/components/CartDrawer";

export default function Header() {
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [openCart, setOpenCart] = useState(false);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        component={Link}
                        to="/" variant="h6"
                        sx={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
                    >
                        ShopCart
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>

                        <IconButton color="inherit" onClick={() => setOpenCart(true)}>
                            <Badge badgeContent={cart.length} color="error">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        {/* Usuário */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                            }}
                            onClick={()=> navigate("/login")}
                        >
                            <AccountCircle />

                            {!user ? (
                                <Box sx={{
                                    display: {
                                        md: "none",
                                        lg: "flex"
                                    },
                                    flexDirection: "column"
                                }}>
                                    <Typography fontSize=".6rem">
                                        Bem vindo(a)! 🙂
                                    </Typography>

                                    <Typography fontSize=".6rem">
                                        Entre ou cadastre-se
                                    </Typography>

                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: {
                                            md: "none",
                                            lg: "flex"
                                        },
                                        flexDirection: "column"
                                    }}
                                >
                                    <Typography fontSize=".6rem">
                                        Olá, {user.name}
                                    </Typography>
                                </Box>

                            )}
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

            <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
        </>
    )
}