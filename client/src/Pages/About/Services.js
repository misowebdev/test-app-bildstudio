import { useState } from "react";
import PropTypes from "prop-types";

import Subtitle from "../../components/UI/Subtitle";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { MdOutlineSettings } from "react-icons/md";
import { GoDeviceCamera, GoBrowser } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const icons = {
  MdOutlineSettings: <MdOutlineSettings />,
  GoDeviceCamera: <GoDeviceCamera />,
  BiSearchAlt: <BiSearchAlt />,
  GoBrowser: <GoBrowser />,
};

function TabContent({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ mt: 3 }}>{children}</Box>}
    </div>
  );
}

TabContent.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Services({ content }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (e, tabIndex) => setSelectedTab(tabIndex);

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 3, mb: 3 }}>
        <Subtitle subtitle="SERVICES" />
      </Container>

      <Box sx={{ bgcolor: "background.light" }}>
        <Container maxWidth="md">
          <Tabs
            variant="fullWidth"
            orientation={isMobile ? "vertical" : "horizontal"}
            value={selectedTab}
            onChange={handleTabChange}
            sx={{ "& svg": { width: 60, height: 60 } }}
            TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
          >
            {content.map((service) => (
              <Tab
                key={service.id}
                sx={{
                  height: 200,
                  fontWeight: "bold",
                  "&.Mui-selected": {
                    bgcolor: "background.medium",
                    color: "background.dark",
                  },
                }}
                icon={icons[service.icon]}
                label={service.name}
              />
            ))}
          </Tabs>
        </Container>
      </Box>
      <Container maxWidth="md">
        {content.map((service, index) => (
          <TabContent value={selectedTab} index={index} key={service.id}>
            <Typography variant="body2">{service.mainText}</Typography>
            <List>
              {service.list
                ? service.list.map((listEl) => (
                    <ListItem key={listEl.id} sx={{ pt: 0, pb: 0 }}>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <FaAngleRight />
                      </ListItemIcon>
                      <ListItemText
                        primary={listEl.text}
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                  ))
                : null}
            </List>
          </TabContent>
        ))}
      </Container>
    </>
  );
}

Services.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      mainText: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default Services;
