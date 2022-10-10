import { Fragment } from "react";

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
      {data.map((project) => (
        <Fragment key={project.id}>
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemIcon>
                <Box
                  component="img"
                  src={`images/${project.image}`}
                  width={80}
                  height={80}
                  sx={{ objectFit: "cover" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={project.name}
                primaryTypographyProps={{ variant: "h5", ml: 7 }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
}

export default ListView;
