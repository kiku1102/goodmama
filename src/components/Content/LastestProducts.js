import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

function LastestProducts() {
  const [products, setProducts] = useState([]);

  const getData = async (paramUrl, paramOptions = {}) => {
    const response = await fetch(paramUrl, paramOptions);
    const responseData = await response.json();
    return responseData;
  };
  useEffect(() => {
    getData("https://shop24hbackend.vercel.app/products?limit=8")
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Grid container mt={8} textAlign="center" spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Typography variant="h2" style={{ "textDecoration": "none", "color": "#8E3200", "fontWeight": "bold" }} className='fontapp'>
            SẢN PHẨM MỚI
          </Typography>
        </Grid>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </Grid>
    </Container>
  );
}
export default LastestProducts;
