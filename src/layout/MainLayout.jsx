import { Box, Toolbar } from "@mui/material";
import Header from "../components/Header/Header";

export default function MainLayout({children}) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Toolbar />
            <Box component="main" flex={1} display="flex" flexDirection="column">
                {children}
            </Box>
        </Box>
    )
}