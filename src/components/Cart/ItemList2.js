import { Button, Grid, IconButton, Checkbox, TableContainer, TableBody, Table, TableHead, TableRow, TableCell, Paper, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
function ItemsList2() {
    const navigate = useNavigate();
    const { products, itemQuantity, totalPrice, totalItem, buyList } = useSelector((reduxData) => reduxData.cartReducer);
    const dispatch = useDispatch();

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((result) => {
            setUser(result);
        });
    }, []);
    const onDeleteProductHandler = (productInfo, productIndex) => {
        console.log(productInfo)
        dispatch({
            type: "DELETE_ITEM",
            value: {
                productInfo: productInfo,
                productIndex: productIndex
            }
        })
    }
    const [numSelected, setNumSelected] = useState(0);
    const [selected, setSelected] = useState([]);

    const increaseItem = (product) => {
        dispatch({
            type: "ADD_ITEM",
            value: {
                quantity: 1,
                itemInfo: product,
            },
        });
    }
    const decreaseItem = (item, itemIndex) => {
        dispatch({
            type: "DECREASE_ITEM",
            value: {
                item: item,
                itemIndex: itemIndex
            },
        });
    }
    useEffect(() => {
        localStorage.setItem("itemQuantity", JSON.stringify(itemQuantity));
        localStorage.setItem("products", JSON.stringify(products));
    })
    const onSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = products.map((item) => item._id);
            setSelected(newSelecteds);
            setNumSelected(products.length);
            selectAllItem();
            return;
        }
        setSelected([]);
        setNumSelected(0);
        removeAllItem();
    }
    const selectedHandle = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };
    const isSelected = (productId) => selected.indexOf(productId) !== -1;

    const selectAllItem = () => {
        dispatch({
            type: "SELECT_ALL_ITEM",
        });
    }
    const removeAllItem = () => {
        dispatch({
            type: "REMOVE_ALL_ITEM",
        });
    }
    const onCheckClick = (event, product) => {
        if (event.target.checked === true) {
            setNumSelected(numSelected + 1);
            dispatch({
                type: "ADD_TO_BUY_LIST",
                value: {
                    product: product
                },
            });
        } else {
            setNumSelected(numSelected - 1)
            dispatch({
                type: "REMOVE_FROM_BUY_LIST",
                value: {
                    product: product
                },
            });
        }
        selectedHandle(product._id)
    }
    function formatCash(cash) {
        if (cash)
            return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
    const onBuyClick = () => {
        if (user === null) {
            navigate('/login')
        }
        if (buyList.length) {
            navigate(`/order`);
        }
    }
    return (
        <>
            <Grid container mt={2}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ "backgroundColor": "#E5C5B5" }}>
                            <TableRow >
                                <TableCell align="left">
                                    <Checkbox
                                        indeterminate={numSelected > 0 && numSelected < products.length}
                                        checked={products.length > 0 && numSelected === products.length}
                                        onClick={onSelectAllClick}
                                    />
                                </TableCell >
                                <TableCell align="left">Sản phẩm</TableCell>
                                <TableCell align="left">Giá bán</TableCell>
                                <TableCell align="left">Số lượng</TableCell>
                                <TableCell align="left">Tổng tiền</TableCell>
                                <TableCell align="left">Chỉnh sửa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ "backgroundColor": "#F4D9C6" }}>
                            {
                                products.map((product, index) => {
                                    const isItemSelected = isSelected(product._id);
                                    return (
                                        <TableRow key={index} >
                                            <TableCell >
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    onClick={(event) => onCheckClick(event, product)}
                                                />
                                            </TableCell>
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
                                                <IconButton onClick={() => { decreaseItem(product, index) }} color="primary" aria-label="remove a product" style={{ height: '40px', width: '40px' }}>
                                                    <RemoveIcon />
                                                </IconButton>
                                                {product.quantity}
                                                <IconButton onClick={() => { increaseItem(product) }} color="primary" aria-label="add a product" style={{ height: '40px', width: '40px' }}>
                                                    <AddIcon />
                                                </IconButton>
                                            </TableCell>

                                            <TableCell >{formatCash(product.buyPrice * product.quantity)}.000VNĐ</TableCell>
                                            <TableCell >
                                                <IconButton onClick={() => { onDeleteProductHandler(product, index) }} >
                                                    <DeleteIcon  />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid container mt={1}>
                <Grid item xs={12} textAlign="end">
                    <Typography variant="h5" sx={{ display: "inline", marginRight: "15px", color: "#FF7C7C", fontWeight: "bold" }}>Total ({totalItem} item): {formatCash(totalPrice)}.000VNĐ</Typography>
                    <Button variant="contained" color="error" onClick={onBuyClick} >Đặt hàng</Button>
                </Grid>
            </Grid>
        </>

    );
}
export default ItemsList2;
