import { Grid, Typography } from "@mui/material";
function ServiceFooter() {
    return (
        <Grid container className="fontapp">
            <Grid item xs={12} md={12} sm={12} lg={12} style={{ "color": "#000" }} className="text-center">
                <Typography variant="h6" fontWeight="bold" >
                    ĐIỀU KHOẢN
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} style={{ "color": "#000" }}>
                <Typography>
                    Chính sách bảo mật thông tin
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} style={{ "color": "#000" }}>
                <Typography>
                    Chính sách giao hàng
                </Typography>
                <Typography>
                    Tuyển dụng
                </Typography>
            </Grid>
        </Grid>
    )
}
export default ServiceFooter;