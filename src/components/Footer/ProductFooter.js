import { Grid, Typography } from "@mui/material";
function ProductFooter() {
    return (
        <Grid container>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography variant="h6" fontWeight="bold" style={{ "color": "#D1512D" }} >
                    VỀ CHÚNG TÔI
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} >
                <Typography style={{ "color": "#D1512D" }}>
                    Thương hiệu Goodmama ra đời vào năm 2014 với các dòng sản phẩm như bỉm/tã vải, ga chống thấm, quần áo, phụ kiện mẹ và bé
                </Typography>
            </Grid>
        </Grid>
    )
}
export default ProductFooter;