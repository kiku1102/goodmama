import { Box, Badge, IconButton, Button, MenuItem, Menu } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function IconNavBar() {
  const {
    itemQuantity, products
  } = useSelector((reduxData) => reduxData.cartReducer);
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      console.log(result);
      setUser(result);
    });
  }, []);
  const navigate = useNavigate();
  const onCartClick = () => {
    navigate("/cart");
  };
  useEffect(() => {
    localStorage.setItem("itemQuantity", JSON.stringify(itemQuantity));
    localStorage.setItem("products", JSON.stringify(products));
})
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutGoogle = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
    // localStorage.clear()
    localStorage.removeItem("itemQuantity");
    localStorage.removeItem("products");
  };

  const myOrder  = () => {
    navigate("/myorder");
  }
  return (
    <Box >
      <IconButton
        edge="end"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr:1, color: '#fff', display: { xs: 'none', md: 'inline' }}}
        
      >
        <NotificationsActiveIcon />
      </IconButton >
      {user === null ? (
        <IconButton 
        size="large"
         color="inherit"
         href="/login" 
        sx={{display: 'inline', color: '#fff' }}>
          <PersonIcon />
        </IconButton>
      ) : (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{display: 'inline'}}
          >
            <img
              src={user.photoURL}
              width={40}
              height={40}
              alt="avatar"
              style={{ borderRadius: "50%" }}
            ></img>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            
          >
            <MenuItem onClick={myOrder} style={{ "textDecoration": "none", "color": "#fff"}} classname="fontapp">Đơn hàng của tôi</MenuItem>
            <MenuItem onClick={logoutGoogle} style={{ "textDecoration": "none", "color": "#fff"}} classname="fontapp">Đăng xuất</MenuItem>
          </Menu>
        </>
      )}

      <IconButton sx={{color: '#fff', display: 'inline'}} onClick={onCartClick}>
        <Badge badgeContent={itemQuantity} color="primary" >
          <LocalGroceryStoreIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}
export default IconNavBar;
