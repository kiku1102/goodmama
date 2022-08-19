import { Grid, Toolbar, Box, AppBar, IconButton, Container } from "@mui/material";
import IconNavBar from "./IconNavBar";
import LogoComponent from "./LogoComponent";
import logo from "../../assets/images/logo.jpg";
import { useEffect } from "react";
function Header() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    
      <Grid container >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "rgb(26 148 255)" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <img alt="logo" src={logo} style={{ width: "80px" }} />
            </IconButton>
            <LogoComponent />
            <IconNavBar />
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
    
    
  );
}
export default Header;
