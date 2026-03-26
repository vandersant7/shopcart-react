import { Box, Toolbar } from "@mui/material";
import Header from "../layout/Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout({children}) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Toolbar />
            <Box component="main" flex={1} display="flex" flexDirection="column">
                {children}
            </Box>
            <Footer />
        </Box>
    )
}