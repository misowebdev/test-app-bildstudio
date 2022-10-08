import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";

const text = {
  success: {
    icon: <IoMdCheckmarkCircleOutline />,
    title: "Thank you!",
    message:
      "Your message has been successfully sent. We will contact you very soon!",
  },
  error: {
    icon: <BiErrorCircle />,
    title: "Error!",
    message: "Error sending message. Please try again later.",
  },
};

function FormStatusMessage({ status }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        "& > svg": {
          color: status === "success" ? "success.main" : "error.main",
          width: 100,
          height: 100,
        },
      }}
    >
      {text[status].icon}
      <Typography variant="h3">{text[status].title}</Typography>
      <Typography>{text[status].message}</Typography>
    </Box>
  );
}

export default FormStatusMessage;
