import { Typography } from "@mui/material";import { NavLink } from "react-router-dom";
;


function LogoComponent() {
    return (
        <>
            <Typography variant="h5" component="div" mr={3}>
                <NavLink to="/" style={{ "textDecoration": "none", "color": "#FFE162"}} classname="fontapp">
                    Trang chủ
                </NavLink>
            </Typography>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/products" style={{ "textDecoration": "none", "color": "#FFE162"}} classname="fontapp">
                    Sản phẩm
                </NavLink>
            </Typography>
        </>




    )
}
export default LogoComponent;