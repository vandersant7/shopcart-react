import {
    Box,
    Typography,
    Link,
    Stack,
} from "@mui/material";

export default function FooterLinks({ title, links }) {
    return (
        <Box>
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                gutterBottom
            >
                {title}
            </Typography>

            <Stack spacing={1}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        color="inherit"
                        underline="hover"
                    >
                        {link.label}
                    </Link>
                ))}
            </Stack>
        </Box>
    );
}