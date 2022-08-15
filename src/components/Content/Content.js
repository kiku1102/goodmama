import { Container, Grid } from "@mui/material";
import CarouselSlider from "./CarouselSlider";
import LastestProducts from "./LastestProducts";
import ViewAll from "./ViewAll";

function Content() {
    return (
        <Container>
            <CarouselSlider />
            <LastestProducts />
            <ViewAll />
        </Container>
    )
}
export default Content;