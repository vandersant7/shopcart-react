import {
    Box,
    Typography,
    Stack,
    IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FooterSocials() {
    return (
        <Box>
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                gutterBottom
            >
                Redes Sociais
            </Typography>

            <Stack direction="row" spacing={1}>
                <IconButton color="inherit">
                    <FacebookIcon />
                </IconButton>

                <IconButton color="inherit">
                    <InstagramIcon />
                </IconButton>

                <IconButton color="inherit">
                    <LinkedInIcon />
                </IconButton>
            </Stack>
        </Box>
    )
}