import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import { HiLink } from "react-icons/hi";

function CardItem({
  image,
  name,
  width = "100%",
  height = 220,
  isCarousel,
  isActive,
}) {
  return (
    <Card
      sx={{
        width,
        height,
        cursor: "pointer",
        position: "relative",
        opacity: isCarousel ? (isActive ? 1 : 0.5) : 1,
        transition: ".5s ease",
        ":hover div": { opacity: 1 },
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={`images/${image}`}
        alt={name}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          bgcolor: "#ffffff80",
          opacity: 0,
          transition: ".5s ease",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: "50%",
            p: 2,
            "& svg": { color: "white", width: 50, height: 50 },
          }}
        >
          <HiLink />
        </Box>
      </Box>
    </Card>
  );
}

CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCarousel: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default CardItem;
