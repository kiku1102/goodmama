
import { Grid, Typography, Avatar, TableCell, TableHead, Paper, Table, TableRow, TableBody, TableContainer } from "@mui/material";
import { useSelector } from "react-redux";
function OrderProduct() {
    const { buyList } = useSelector((reduxData) => reduxData.cartReducer);
    function formatCash(cash) {
        if (cash)
            return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
    return (
        <Grid container mt={1} spacing={2} p={3} sx={{ border: "double #ff6347", borderRadius: "10px", backgroundColor: "#fff" }}>
            <Grid item xs={12} sm={12} lg={12} md={12}>
                <Typography variant="h5">
                    Sản phẩm đã đặt hàng
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Sản phẩm</TableCell>
                                <TableCell align="left">Đơn giá</TableCell>
                                <TableCell align="left">Số lượng</TableCell>
                                <TableCell align="left">Thành tiền</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                buyList.map((product, index) => {
                                    return (
                                        <TableRow key={index} >
                                            <TableCell >
                                                <Grid container>
                                                    <Avatar
                                                        src={product.imageUrl}
                                                        alt={`img ${index}`}
                                                        variant="square"
                                                        sx={{ width: 56, height: 56, marginRight: "10px" }}
                                                    />
                                                    {product.name}
                                                </Grid>
                                            </TableCell>
                                            <TableCell >{formatCash(product.buyPrice)}.000VNĐ</TableCell>
                                            <TableCell >
                                                {product.quantity}
                                            </TableCell>
                                            <TableCell >{formatCash(product.buyPrice * product.quantity)}.000VNĐ</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default OrderProduct;
