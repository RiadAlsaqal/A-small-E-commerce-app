import React, { useRef } from "react";
import { ProductCard } from "../../../components/ProductCard";
import { ProductModel } from "src/model/Product.model";
import { Stack } from "../../../../lib/Stack";
import useInfiniteScrollEffect from "../hooks/useInfiniteScrollEffect";

type TProps = {
  data: ProductModel[];
  onScrollEnd?: () => void;
  containerStyle?: React.CSSProperties;
  subContainerStyle?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  showAction?: boolean;
};

const ProductsList: React.FC<TProps> = ({
  data,
  onScrollEnd,
  containerStyle,
  showAction,
  subContainerStyle,
  cardStyle,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScrollEffect(containerRef, onScrollEnd!);

  return (
    <Stack
      style={{
        height: "100%",
        width: "100%",
        ...containerStyle,
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
          justifyContent: "flex-start",
          width: "100%",
          ...subContainerStyle,
        }}
      >
        {data?.map(({ description, id, images, price, title }) => {
          return (
            <ProductCard
              key={id}
              description={description}
              imageUrl={images[0]}
              name={title}
              price={price}
              id={id}
              showAction={showAction}
              style={cardStyle}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ProductsList;
