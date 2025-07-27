import { Alert } from "@mui/material";


const AlertBox = ({ severity, message }:any) => {
  if (!message) return null; // Don't show alert if there's no message

  return (
    <Alert severity={severity}>
      {message}
    </Alert>
  );
};

export default AlertBox;
