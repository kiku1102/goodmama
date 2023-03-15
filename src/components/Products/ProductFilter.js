import {
    Grid,
    FormControlLabel,
    Typography,
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControl,
    Drawer,
    Box
} from "@mui/material";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
function ProductFilter2() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const dispatch = useDispatch();
    const {
        taskFilterNameInput,
        taskFilterProductType,
        taskFilterMaxPriceInput,
        taskFilterMinPriceInput,
    } = useSelector((reduxData) => reduxData.filterReducer);
    const [productTypes, setProductTypes] = useState([]);
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    };
    useEffect(() => {
        getData(
            `https://shop24hbackend.vercel.app/product_types`
        )
            .then((data) => {
                console.log(data.data);
                setProductTypes(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const inputProductChangeHandler = (event) => {
        dispatch({
            type: "TASK_INPUT_PRODUCT_CHANGE",
            value: event.target.value,
        });
    };
    const inputMaxPriceChangeHandler = (event) => {
        dispatch({
            type: "TASK_MAX_PRICE_PRODUCT_CHANGE",
            value: event.target.value,
        });
    };
    const inputMinPriceChangeHandler = (event) => {
        dispatch({
            type: "TASK_MIN_PRICE_PRODUCT_CHANGE",
            value: event.target.value,
        });
    };
    const onBtnFilterClick = () => {
        dispatch({
            type: "TASK_ON_FILTER_CLICK",
        });
    };
    const productTypeChangeHandler = (event) => {
        dispatch({
            type: "TASK_PRODUCT_TYPE_CHANGE",
            value: event.target.value,
        });
    };
    const closeDrawer = () => {
        setIsOpenDrawer(false);
    }
    const openDrawer = () => {
        setIsOpenDrawer(true);
    }
    return (
        <div >
            <Grid container textAlign={{ xs: "center", md: "end", sm: "end" }} paddingRight={{ xs: 1, md: 5, sm: 5 }}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Button
                        onClick={openDrawer}
                        variant="contained"
                        color="secondary">
                        <FilterAltIcon />
                        Lọc Sản Phẩm
                    </Button>
                </Grid>
            </Grid>

            <Drawer
                anchor="right"
                open={isOpenDrawer}
                onClose={closeDrawer}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                    <Grid container p={2} >
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <Typography gutterBottom variant="h6" component="div">
                                Tên sản phẩm
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <TextField
                                size="small"
                                fullWidth
                                label="nhập tên sản phẩm"
                                onChange={inputProductChangeHandler}
                                value={taskFilterNameInput}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12} mt={4}>
                            <Typography gutterBottom variant="h6" component="div">
                                Giá tiền
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <TextField
                                fullWidth
                                size="small"
                                label="Min"
                                type="number"
                                value={taskFilterMinPriceInput}
                                onChange={inputMinPriceChangeHandler}
                            />
                        </Grid>

                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                textAlign="center"
                            >
                                -
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Max"
                                type="number"
                                value={taskFilterMaxPriceInput}
                                onChange={inputMaxPriceChangeHandler}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12} mt={4}>
                            <Typography gutterBottom variant="h6" component="div">
                                Loại sản phẩm
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <FormControl>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                <Grid container>
                                    <Grid item xs={12} lg={12} md={12} sm={12}>
                                        <FormControlLabel value="" control={<Radio onChange={productTypeChangeHandler} />} label="All" />
                                    </Grid>
                                    {
                                        productTypes.map((types, index) => {
                                            return (
                                                <Grid item xs={12} lg={12} md={12} sm={12}>
                                                    <FormControlLabel key={index} value={types._id} control={<Radio onChange={productTypeChangeHandler} />} label={types.name} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </RadioGroup>

                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12} mt={4}>
                            <Button
                                color="secondary"
                                variant="contained"
                                fullWidth
                                onClick={onBtnFilterClick}
                            >
                                Tìm sản phẩm
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Drawer>

        </div>



    );
}
export default ProductFilter2;
