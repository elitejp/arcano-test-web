import React from "react";
import {
  ProductBought,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
  ProductTotal,
  StyledCardContainer,
} from "./style";
import { IProductProp } from "./types";

const ProductCard: React.FC<IProductProp> = ({ product }) => {
  return (
    <StyledCardContainer>
      <ProductImage>
        <img src={product.image} alt={product.title} draggable="false" />
      </ProductImage>

      <ProductTitle>{product.title}</ProductTitle>

      <ProductDescription>{product.description}</ProductDescription>

      <ProductBought>
        <ProductPrice>
          Preço:{" "}
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </ProductPrice>

        <ProductQuantity>Quantidade: {product.quantity}</ProductQuantity>
      </ProductBought>

      <ProductTotal>
        Total:{" "}
        {product.total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </ProductTotal>
    </StyledCardContainer>
  );
};

export default ProductCard;
