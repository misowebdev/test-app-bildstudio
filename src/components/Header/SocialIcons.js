import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import {
  FaTwitter,
  FaFacebookF,
  FaRss,
  FaPinterestP,
  FaGooglePlusG,
  FaDribbble,
} from "react-icons/fa";

const icons = [
  <FaTwitter />,
  <FaFacebookF />,
  <FaRss />,
  <FaPinterestP />,
  <FaGooglePlusG />,
  <FaDribbble />,
];

function SocialIcons() {
  return (
    <Box>
      {icons.map((icon, index) => (
        <IconButton
          key={index}
          size="small"
          sx={{
            "& :hover": { color: "secondary.main" },
            "& > svg": {
              width: 15,
              height: 15,
              border: "4px solid",
              borderRadius: "50%",
              p: "4px",
              color: "grey.400",
            },
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
}

export default SocialIcons;
