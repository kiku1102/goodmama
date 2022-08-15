import LoginModal from "../components/Modal/Login";
import { Grid } from "@mui/material";
function Login() {
  return (
    <Grid container textAlign="center" justifyContent="center">
      <Grid item xs={4} md={4} sm={4} lg={4}>
        <LoginModal />
      </Grid>
    </Grid>
  );
}

export default Login;
