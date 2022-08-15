import { Typography } from "@mui/material";import { NavLink } from "react-router-dom";
;


function LogoComponent() {
    return (
        <>
            <Typography variant="h4" component="div" mr={3}>
                <NavLink to="/" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold", "font-family": 'Great Vibes' }}>
                    Trang chủ
                </NavLink>
            </Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/products" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold", "font-family": 'Great Vibes' }}>
                    Sản phẩm
                </NavLink>
            </Typography>
        </>




    )
}
export default LogoComponent;