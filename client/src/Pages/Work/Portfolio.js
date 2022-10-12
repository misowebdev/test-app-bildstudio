import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useTransition, animated } from "react-spring";

import useFetchOnScroll from "../../hooks/useFetchOnScroll";
import { listProjects } from "../../api/projectApi";

import Filter from "./Filter";
import Spinner from "../../components/UI/Spinner";
import GridView from "../../components/UI/GridView";
import ListView from "../../components/UI/ListView";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const perPage = 9;

const filterData = (data, category) => {
  if (category === "all") return data.flatMap((page) => page.results);
  return data.flatMap((page) =>
    page.results.filter((project) => project.category === category)
  );
};

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLayout, setSelectedLayout] = useState("grid");

  const transitions = useTransition(selectedLayout, {
    from: { opacity: 0, transform: "rotateY(180deg)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { position: "absolute", opacity: 0, transform: "scale(0.6)" },
    initial: null,
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ["projects"],
    ({ pageParam = 1 }) => listProjects(pageParam, perPage),
    {
      getNextPageParam: (lastPage, allPages) => {
        let maxPages = lastPage?.total / perPage;
        maxPages = maxPages % 1 > 0 ? maxPages + 1 : maxPages;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
      staleTime: 5 * 60 * 1000,
    }
  );

  useFetchOnScroll(isFetchingNextPage, hasNextPage, fetchNextPage);

  const filtered = useMemo(() => {
    if (data) return filterData(data.pages, selectedCategory);
  }, [data, selectedCategory]);

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleLayoutChange = (layout) => setSelectedLayout(layout);

  if (isLoading) return <Spinner />;
  if (isError) return <Typography>Error: {error.message}</Typography>;

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        selectedLayout={selectedLayout}
        onCategoryChange={handleCategoryChange}
        onLayoutChange={handleLayoutChange}
      />
      <Box sx={{ mt: 3, mb: 3, minHeight: 500, position: "relative" }}>
        {transitions((styles, selectedLayout) =>
          selectedLayout === "grid" ? (
            <animated.div
              style={{ ...styles, top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <GridView data={filtered} />
            </animated.div>
          ) : (
            <animated.div
              style={{ ...styles, top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <ListView data={filtered} />
            </animated.div>
          )
        )}
      </Box>
      {isFetchingNextPage ? <Spinner /> : null}
    </>
  );
}

export default Portfolio;
