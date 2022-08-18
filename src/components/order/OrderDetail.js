
import { Container, Grid, Typography, Button, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeliveryInfo from "./DeliveryInfo";
import OrderProduct from "./OrderProduct";
import swal from 'sweetalert';

function OrderDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { totalPrice, buyList } = useSelector((reduxData) => reduxData.cartReducer);
    const [isOpenAlert, setIsOpenAlert] = useState(false);
    function formatCash(cash) {
        if (cash)
            return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
    const onBtnConfirmClick = () => {
        dispatch({
            type: "CONFIRM_ORDER",
            value: {
                totalPrice: totalPrice,
                buyList: buyList
            }
        })
        setIsOpenAlert(true);
        swal("Đơn hàng đã đặt thành công","", "success")
        .then((result) => {
            navigate("/");
          });
        
    }
    const handleCloseAlert = () => {
        setIsOpenAlert(false);
      }
    return (
        <div>
            <Container>
                <OrderProduct />
                <DeliveryInfo />
                <Grid container mt={1} spacing={2} p={3} sx={{border: "#FE7171", borderRadius: "10px", backgroundColor: "#D2F5E3" }}>
                    <Grid item xs={6} sm={6} lg={6} md={6}>
                        <Typography>Tổng thanh toán: <span style={{ color: "orange", fontWeight: "bold", fontSize: "x-large" }}>{formatCash(totalPrice)}.000VND</span></Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6} md={6} textAlign="end">
                        <Button variant="contained" color="warning" size="large" onClick={onBtnConfirmClick}>Xác nhận</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default OrderDetail;
