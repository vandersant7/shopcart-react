import { Box, Container, Typography, Link } from "@mui/material";
import { institutionalLinks, supportLinks } from "./footerData"
import FooterSocials from "./FooterSocials";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks"

export default function Footer() {
  return (
    <Box component="footer"
      sx={{
        backgroundColor: "#1161b1",
        color: "#fff",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: 4,
            alignItems: "start",
          }}
        >
          <FooterBrand />

          <FooterLinks
            title="Institucional"
            links={institutionalLinks}
          />

          <FooterLinks
            title="Suporte"
            links={supportLinks}
          />

          <FooterSocials />
        </Box>
      </Container>
    </Box>
  );
}