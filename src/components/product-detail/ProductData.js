import { Button, Grid, IconButton, Stack, Typography, Alert, Snackbar } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function ProductData() {
  const dispatch = useDispatch();
  const { products, itemQuantity } = useSelector((reduxData) => reduxData.cartReducer);
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const getData = async (paramUrl, paramOptions = {}) => {
    const response = await fetch(paramUrl, paramOptions);
    const responseData = await response.json();
    return responseData;
  };

  useEffect(() => {
    getData("https://shop24hbackend.vercel.app/products/" + productId)
      .then((data) => {
        console.log(data.data);
        setProduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);
  useEffect(() => {
    localStorage.setItem("itemQuantity", JSON.stringify(itemQuantity));
    localStorage.setItem("products", JSON.stringify(products));
  })
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  // function formatCash(cash) {
  //   if (cash)
  //     return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  // }
  const onBtnAddCartClick = () => {
    if (quantity) {
      dispatch({
        type: "ADD_ITEM",
        value: {
          quantity: quantity,
          itemInfo: { ...product, quantity: quantity },
        },
      });
      setIsOpenAlert(true);
    }
  }

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  }
  return (
    <Grid container mt={3} spacing={{ xs: 1, sm: 2, md: 5 }}>
      <Grid item xs={12} md={6} sm={6} lg={6}>
        <img src={product.imageUrl} alt="product-img" width="100%" />
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={6} my="auto">
        <Grid container spacing={1} textAlign="center">
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Typography variant="h4">{product.name}</Typography>
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Typography variant="h5" color="red">
            {product.buyPrice}.000VNĐ
            </Typography>
            

          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Stack direction="row" spacing={1} style={{ height: '40px', justifyContent: "center" }} >
              <IconButton onClick={reduceQuantity} color="primary" aria-label="remove a product" style={{ height: '40px', width: '40px' }}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="h5">{quantity}</Typography>
              <IconButton onClick={addQuantity} color="primary" aria-label="add a product" style={{ height: '40px', width: '40px' }}>
                <AddIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Button color="error" variant="contained" onClick={onBtnAddCartClick}>
              Thêm vào giỏ hàng
            </Button>
            {/* <Button color="error" size="large" variant="contained" onClick={onBtnBuyClick} sx={{ marginLeft: "10px" }}>
              BUY NOW
            </Button> */}
          </Grid>
          <Grid container textAlign="justify" mt={3} paddingX={4}>
            <Grid item xs={12} md={12} sm={12} lg={12} >
              <Typography variant="h5" fontWeight="bold" style={{ "color": "#8E3200"}} className="fontapp">
                Mô tả
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <Typography>{product.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={isOpenAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Sản phẩm đã được thêm vào giỏ hàng
        </Alert>
      </Snackbar>
    </Grid>
  );
}
export default ProductData;
