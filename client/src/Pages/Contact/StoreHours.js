import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Subtitle from "../../components/UI/Subtitle";

const openHours = [
  { day: "Monday - Thursday", hours: "8 am - 5 pm" },
  { day: "Friday", hours: "8 am - 6 pm" },
  { day: "Saturday", hours: "9 am - 5 pm" },
  { day: "Sunday & Holidays", hours: "Closed" },
];

function StoreHours() {
  return (
    <Box>
      <Subtitle subtitle="STORE HOURS" />
      <List disablePadding>
        {openHours.map(({ day, hours }) => (
          <ListItem
            key={day}
            disableGutters
            disablePadding
            secondaryAction={<Typography variant="body2">{hours}</Typography>}
          >
            <ListItemText
              sx={{ m: 0 }}
              primary={day}
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default StoreHours;
