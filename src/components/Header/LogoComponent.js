import { Typography } from "@mui/material";import { NavLink } from "react-router-dom";
;


function LogoComponent() {
    return (
        <>
            <Typography variant="h6" component="div" mr={3}>
                <NavLink to="/" style={{"textDecoration": "none", "fontWeight": "bold", "color": "#fff"}} classname="fontapp">
                    Trang chủ
                </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/products" style={{"textDecoration": "none", "fontWeight": "bold", "color": "#fff"}} classname="fontapp">
                    Sản phẩm
                </NavLink>
            </Typography>
        </>




    )
}
export default LogoComponent;