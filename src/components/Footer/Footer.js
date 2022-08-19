import { Container, Grid } from "@mui/material";
import ProductFooter from "./ProductFooter";
import ServiceFooter from "./ServiceFooter";
import SocialFooter from "./SocialFooter";
import SupportFooter from "./SupportFooter";
function Footer() {
    return (
        <Container>
            <Grid container color="white" mt={5} sx={{ p: 5}} spacing={2}>
            <Grid item xs={12} md={3} sm={3} lg={3}>
                <ProductFooter />
            </Grid>
            <Grid item xs={12} md={3} sm={3} lg={3}>
                <ServiceFooter />
            </Grid>
            <Grid item xs={12} md={3} sm={3} lg={3}>
                <SupportFooter />
            </Grid>
            <Grid item xs={12} md={3} sm={3} lg={3}>
                <SocialFooter />
            </Grid>
        </Grid>
        </Container>
    )
}
export default Footer;