
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { Grid } from "@mui/material";
import OrderDetail from "../components/order/OrderDetail";
function OrderPage() {
    const breadcrumbArray = [
        {
            name: "Trang chủ",
            url: "/",
        },
        {
            name: "Giỏ hàng",
            url: "/cart"
        }
    ];
    return (
        <div style={{ backgroundColor: "#D2F5E3"}} className="fontapp">
            <Header />
            <BreadCrumb breadcrumbArray={breadcrumbArray} pageName="Thanh toán" />
            <Grid mt={3}>
                <OrderDetail />
            </Grid>
            <Footer />
        </div>
    );
}

export default OrderPage;
