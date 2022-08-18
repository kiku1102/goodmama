
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { Grid } from "@mui/material";
import ItemsList2 from "../components/Cart/ItemList2";
function CartPage() {
    const breadcrumbArray = [
        {
            name: "Trng chủ",
            url: "/",
        },
    ];
    return (
        <div style={{ backgroundColor: "#D2F5E3",}} className="fontapp">
            <Header />
            <BreadCrumb breadcrumbArray={breadcrumbArray} pageName="Giỏ hàng" />
            <Grid mx={3}>
                <ItemsList2 />
            </Grid>
            <Footer />
        </div>
    );
}

export default CartPage;
