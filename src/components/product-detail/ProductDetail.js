import { Container } from "@mui/material";
import ProductData from "./ProductData";
import { useEffect } from "react";
import SimilarProducts from "./SimilarProducts";

function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <ProductData />
      <SimilarProducts />
    </Container>
  );
}
export default ProductDetail;
