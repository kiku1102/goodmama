import { Grid, Typography } from "@mui/material";
function SupportFooter() {
    return (
        <Grid container className="fontapp" style={{ "color": "#8E3200" }}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography variant="h6" fontWeight="bold" className="text-center">
                    LIÊN HỆ
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} >
                <Typography>
                    Địa chỉ: 38 ngõ 185 Minh Khai - P. Minh Khai - Q. Hai Bà Trưng - Tp. Hà Nội
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography>
                    Số điện thoại: 0389698338
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography>
                    Email: goodmama@gmail.com
                </Typography>
            </Grid>
        </Grid>
    )
}
export default SupportFooter;