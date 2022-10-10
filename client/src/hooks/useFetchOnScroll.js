import { useEffect } from "react";

function useFetchOnScroll(isFetching, hasNextPage, fetch) {
  useEffect(() => {
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (
        !isFetching &&
        hasNextPage &&
        scrollHeight - scrollTop <= clientHeight * 1.1
      ) {
        fetch();
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
  }, [isFetching, hasNextPage]);
}

export default useFetchOnScroll;
