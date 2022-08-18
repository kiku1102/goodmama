import { Grid, Button, Typography, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, googleProvider } from "../../firebase";

import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const loginGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid
      container
      mt={5}
      p={3}
      spacing={3}
      sx={{ p: 5, backgroundColor: "#f1f3f4" }}
    >
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={loginGoogle}
        >
          <GoogleIcon /> Đăng nhập bằng Google
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={12}>
        <Typography>Đăng nhập bằng tài khoản</Typography>
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={12}>
        <TextField fullWidth label="Username" />
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={12}>
        <TextField fullWidth label="Password" />
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={12}>
        <Button fullWidth variant="contained" color="success">
        Đăng nhập
        </Button>
      </Grid>
    </Grid>
  );
}
export default Login;
