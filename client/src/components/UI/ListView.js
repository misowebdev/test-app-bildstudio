import { Fragment } from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ListView({ data }) {
  if (!data.length) {
    return (
      <Box sx={{ pt: 10, textAlign: "center" }}>
        <Typography variant="h5">No Results</Typography>
      </Box>
    );
  }
  return (
    <List>
      {data?.map((item) => (
        <Fragment key={item.id}>
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemIcon>
                <Box
                  component="img"
                  src={`images/${item.image}`}
                  width={80}
                  height={80}
                  sx={{ objectFit: "cover" }}
                  alt={item.name}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                secondary={item?.description}
                primaryTypographyProps={{ variant: "h5", ml: 7 }}
                secondaryTypographyProps={{ ml: 7 }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
}

ListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired
  ),
};

export default ListView;
