import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProductCard({ product }) {
  
  const navigate = useNavigate();
  const hrefProductDetail = `/products/${product._id}`;
  const onCardClick = () => {
    navigate(hrefProductDetail);
  };
  function formatCash(cash) {
    if (cash)
      return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  return (
    <Grid item xs={12} md={3} sm={6} lg={3} py={3} style={{ display: "flex", textAlign: "center", justifyContent: "center" }} >
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardActionArea onClick={onCardClick}>
          <CardContent>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ maxWidth: "100%", width: "200px", height: "200px", objectFit: "contain" }}
            />
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="h5" color="red">
              {product.buyPrice}.000VNĐ
            </Typography>
            

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default ProductCard;
