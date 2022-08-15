
import { Grid, TextField, Typography, Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
function DeliveryInfo() {
    const dispatch = useDispatch();
    const { fullname, email, address, phoneNumber, note, alertContent, isOpenAlert, alertStatus } = useSelector((reduxData) => reduxData.orderReducer);
    useEffect(() => {
        auth.onAuthStateChanged((result) => {
            dispatch({
                type: "GET_USER_INFOMATION",
                value: result
            })
        });
    }, [])
    const changeFullnameHandler = (event) => {
        dispatch({
            type: "CHANGE_FULLNAME_INPUT",
            value: event.target.value
        })
    }
    const changeAddressHandler = (event) => {
        dispatch({
            type: "CHANGE_ADDRESS_INPUT",
            value: event.target.value
        })
    }
    const changeEmailHandler = (event) => {
        dispatch({
            type: "CHANGE_EMAIL_INPUT",
            value: event.target.value
        })
    }
    const changeNoteHandler = (event) => {
        dispatch({
            type: "CHANGE_NOTE_INPUT",
            value: event.target.value
        })
    }
    const changePhoneNumberHandler = (event) => {
        dispatch({
            type: "CHANGE_PHONE_NUMBER_INPUT",
            value: event.target.value
        })
    }
    const handleCloseAlert = () => {
        console.log("close")
        dispatch({
            type: "CLOSE_ALERT",
        })
    }
    return (
        <div>
            <Grid container mt={1} spacing={2} p={3} sx={{ border: "double #ff6347", borderRadius: "10px", backgroundColor: "#fff" }}>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <Typography variant="h5">
                    Địa chỉ nhận hàng
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <TextField size="small" fullWidth label="Full name" value={fullname} id="fullname" onChange={changeFullnameHandler} />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <TextField size="small" fullWidth label="Phone Number" value={phoneNumber} onChange={changePhoneNumberHandler} />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <TextField size="small" fullWidth label="Email" value={email} onChange={changeEmailHandler} />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <TextField size="small" fullWidth label="Address" value={address} onChange={changeAddressHandler} />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <TextField size="small" fullWidth label="Note" value={note} onChange={changeNoteHandler} />
                </Grid>
            </Grid>
            <Snackbar open={isOpenAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertStatus} sx={{ width: '100%' }}>
                    {alertContent}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default DeliveryInfo;
