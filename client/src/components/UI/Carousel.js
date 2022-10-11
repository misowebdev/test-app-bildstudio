import PropTypes from "prop-types";

import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

import CardItem from "./CardItem";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Carousel({ data }) {
  const [activeItem, setActiveItem] = useState(0);

  const onMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const onTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const extraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    gutter: 20,
    startEndGutter: onMobile ? 20 : onTablet ? 40 : 140,
    withLoop: true,
    itemsPerSlide: onMobile ? 1 : 3,
    initialStartingPosition: "center",
    items: data.map((item, index) => ({
      id: item.id,
      renderItem: (
        <CardItem
          image={item.image}
          name={item.name}
          isCarousel
          isActive={activeItem === index}
          height={extraLarge ? 300 : 200}
        />
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      const currentSliderIndex = data.findIndex(
        (el) => el.id === event.nextItem.id
      );
      setActiveItem(currentSliderIndex);
    }
  });

  return (
    <Container maxWidth={false} disableGutters sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ overflow: "hidden", mt: 4, mb: 4 }}>{carouselFragment}</Box>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 4,
            textAlign: "center",
          }}
        >
          <IconButton
            sx={{ fontSize: 40, color: "primary.main", height: "fit-content" }}
            onClick={() => slideToPrevItem()}
          >
            <FaAngleLeft />
          </IconButton>
          <Box>
            <Typography variant="h6">{data[activeItem].name}</Typography>
            <Typography variant="body2">
              {data[activeItem]?.description}
            </Typography>
          </Box>
          <IconButton
            sx={{ fontSize: 40, color: "primary.main", height: "fit-content" }}
            onClick={() => slideToNextItem()}
          >
            <FaAngleRight />
          </IconButton>
        </Box>
      </Container>
    </Container>
  );
}

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
