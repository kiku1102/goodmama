import { Grid } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MyOrder from "../components/order/MyOrder";

function MyOrderPage() {
    const breadcrumbArray = [
        {
            name: "Trang chủ",
            url: "/",
        },
    ];

    return (
        <div style={{ backgroundColor: "#D2F5E3"}} className="fontapp">
            <Header />
            <BreadCrumb breadcrumbArray={breadcrumbArray} pageName="Đơn hàng của tôi" />
            <Grid mx={3}>
                <MyOrder />
            </Grid>
            <Footer />
        </div>
    )
} 
export default MyOrderPage;