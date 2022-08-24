import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      props.closeSent();
      return;
    }
    props.closeSent();
  };
  return (
    <Snackbar open={props.sent} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Your message has been sent!
      </Alert>
    </Snackbar>
  );
}
