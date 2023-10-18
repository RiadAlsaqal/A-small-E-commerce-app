import React, { useCallback, useEffect, useRef } from "react";
import { ProductCard } from "../../../components/ProductCard";
import { ProductModel } from "src/model/Product.model";
import { Stack } from "../../../../lib/Stack";

type TProps = {
  data: ProductModel[];
  onScrollEnd: () => void;
};

const ProductsList: React.FC<TProps> = ({ data, onScrollEnd }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      const isAtEnd =
        container.scrollTop + container.clientHeight === container.scrollHeight;
      if (isAtEnd) {
        onScrollEnd();
      }
    }
  }, [onScrollEnd]);
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef, handleScroll]);
  return (
    <Stack
      style={{
        height: "100%",
      }}
    >
      <Stack
        ref={containerRef}
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          height: "99%",
          overflowY: "scroll",
          gap: 10,
        }}
      >
        {data?.map(({ description, id, images, price, title }) => (
          <ProductCard
            key={id}
            description={description}
            imageUrl={images[0]}
            name={title}
            price={price}
            id={id}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductsList;
