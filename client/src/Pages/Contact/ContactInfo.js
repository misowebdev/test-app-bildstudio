import Subtitle from "../../components/UI/Subtitle";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const contact = {
  email: "info@display.com",
  phone: "1.306.222.4545",
  address: "222 2nd Ave",
  address2: "South Saskabush, SK S7M 1T6",
};

function ContactInfo() {
  const { email, phone, address, address2 } = contact;

  return (
    <Box sx={{ mb: 3 }}>
      <Subtitle subtitle="CONTACT INFO" />
      <Typography variant="body2" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.
      </Typography>
      <Box
        component="address"
        sx={{ fontStyle: "normal", "& :nth-of-type(2)": { mb: 2 } }}
      >
        {email ? (
          <Typography variant="body2">
            email:{" "}
            <Typography variant="body2" component="span" color="primary">
              {email}
            </Typography>
          </Typography>
        ) : null}
        {phone ? <Typography variant="body2">phone: {phone}</Typography> : null}
        {address ? <Typography variant="body2">{address}</Typography> : null}
        {address2 ? <Typography variant="body2">{address2}</Typography> : null}
      </Box>
    </Box>
  );
}

export default ContactInfo;
