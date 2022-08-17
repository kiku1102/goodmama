import { Container } from "@mui/material";
import ProductData from "./ProductData";
import { useEffect } from "react";
import SimilarProducts from "./SimilarProducts";


function ProductDetail() {
  const location = useLocation();
  const { key } = location;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key])
  return (
    <Container>
      <ProductData />
      <SimilarProducts />
    </Container>
  );
}
import { useLocation } from "react-router-dom";
export default ProductDetail;
