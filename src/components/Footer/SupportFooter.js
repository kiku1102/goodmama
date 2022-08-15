import { Grid, Typography } from "@mui/material";
function SupportFooter() {
    return (
        <Grid container>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography variant="h6" fontWeight="bold" style={{ "color": "#D1512D" }}>
                    LIÊN HỆ
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} style={{ "color": "#D1512D" }}>
                <Typography>
                    Địa chỉ: 38 ngõ 185 Minh Khai - P. Minh Khai - Q. Hai Bà Trưng - Tp. Hà Nội
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} style={{ "color": "#D1512D" }}>
                <Typography>
                    Số điện thoại: 0389698338
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} style={{ "color": "#D1512D" }}>
                <Typography>
                    Email: goodmama@gmail.com
                </Typography>
            </Grid>
        </Grid>
    )
}
export default SupportFooter;