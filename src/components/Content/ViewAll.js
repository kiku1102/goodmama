import { Grid, Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from "react-router-dom";
function ViewAll() {
  return (
    <Grid textAlign="center">
      <Button variant="contained" color="error">
        <NavLink to="products" style={{ "textDecoration": "none", "color": "#fff"}}>
        XEM THÊM
        </NavLink>
        <ArrowDropDownIcon />
      </Button>
    </Grid>
  );
}
export default ViewAll;
