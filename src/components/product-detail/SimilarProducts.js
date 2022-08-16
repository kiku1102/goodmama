import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

function SimilarProducts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [products, setProducts] = useState([]);

  const getData = async (paramUrl, paramOptions = {}) => {
    const response = await fetch(paramUrl, paramOptions);
    const responseData = await response.json();
    return responseData;
  };
  useEffect(() => {
    getData("https://goodmamabackend.herokuapp.com/products?limit=8")
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (

    <Grid container textAlign="center" spacing={2} mt={2}>
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Typography variant="h3" fontWeight="bold" textAlign="start" style={{ "color": "#8f5741", "font-family": 'Great Vibes'}}>
          Sản phẩm khác
        </Typography>
      </Grid>
      
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
     
    </Grid>

  );
}
export default SimilarProducts;
