import { Container } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductDetail from "../components/product-detail/ProductDetail";
function ProductInfo() {
  const breadcrumbArray = [
    {
      name: "Trang chủ",
      url: "/",
    },
    {
      name: "Danh mục sản phẩm",
      url: "/products",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{ backgroundColor: "#D2F5E3",  }} className="fontapp">
      <Header />
      <BreadCrumb breadcrumbArray={breadcrumbArray} pageName="Sản phẩm" />
      <Container>
        <ProductDetail />
      </Container>

      <Footer />
    </div>
  );
}

export default ProductInfo;
