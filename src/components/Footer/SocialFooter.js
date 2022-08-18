import { Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/images/logo.jpg";
function SocialFooter() {
    return (
        <Grid container style={{ "color": "#8E3200" }} className="text-center">
            <Grid item xs={12} md={12} sm={12} lg={12} >
                <img alt="logo" src={logo} style={{ width: "100px" }} />
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography variant="h5" fontWeight="bold">
                    GOOD MAMA
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <FacebookIcon />
                <InstagramIcon />
                <PinterestIcon />
                <TwitterIcon />
                <LinkedInIcon />
            </Grid>
        </Grid>
    )
}
export default SocialFooter;