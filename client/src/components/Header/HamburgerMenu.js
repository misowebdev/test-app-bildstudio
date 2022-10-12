import { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function HamburgerMenu({ pages }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <GiHamburgerMenu fontSize="30px" color="palette.primary.main" />
      </IconButton>

      <Drawer onClose={() => setOpen(false)} anchor="right" open={open}>
        <IconButton onClick={() => setOpen(false)} sx={{ mr: "auto" }}>
          <AiOutlineMenuUnfold fontSize="30px" />
        </IconButton>

        <Divider />

        <Box sx={{ width: 300 }}>
          <List>
            {pages.map((page, index) => (
              <ListItem disablePadding key={page.label}>
                <ListItemButton
                  component={Link}
                  to={page.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={page.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
