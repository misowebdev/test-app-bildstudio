import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import useFetchOnScroll from "../../hooks/useFetchOnScroll";
import { listProjects } from "../../api/projectApi";

import Filter from "./Filter";
import GridView from "./GridView";
import ListView from "./ListView";
import Spinner from "../../components/UI/Spinner";

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
  const handlelayoutChange = (layout) => setSelectedLayout(layout);

  if (isLoading) return <Spinner />;
  if (isError) return <Typography>Error: {error.message}</Typography>;

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        selectedLayout={selectedLayout}
        onCategoryChange={handleCategoryChange}
        onLayoutChange={handlelayoutChange}
      />
      <Box sx={{ mt: 3, mb: 3, minHeight: 500 }}>
        {selectedLayout === "grid" ? (
          <GridView data={filtered} />
        ) : (
          <ListView data={filtered} />
        )}
      </Box>
      {isFetchingNextPage ? <Spinner /> : null}
    </>
  );
}

export default Portfolio;
