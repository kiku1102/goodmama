import { Container } from "@mui/material";
import ProductData from "./ProductData";
import { useEffect } from "react";
import SimilarProducts from "./SimilarProducts";
import { useLocation } from "react-router-dom";

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

export default ProductDetail;
