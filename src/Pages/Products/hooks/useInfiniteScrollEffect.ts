import { useEffect, useCallback, RefObject } from "react";

const useInfiniteScrollEffect = (
  containerRef: RefObject<HTMLElement>,
  onScroll?: () => void
) => {
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      if (
        container.scrollHeight - container.scrollTop ===
        container.clientHeight
      ) {
        onScroll?.();
      }
    }
  }, [onScroll, containerRef]);

  useEffect(() => {
    const container = containerRef.current;

    if (container && onScroll) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [containerRef, handleScroll, onScroll]);

  return null;
};

export default useInfiniteScrollEffect;
