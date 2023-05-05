import styled from "styled-components";

export const StyledCardContainer = styled.li`
  max-width: 312px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductImage = styled.figure`
  position: relative;
  width: 312px;
  height: 152px;

  background-color: var(--grey7);
  outline: 0px solid var(--brand1);

  display: flex;
  justify-content: center;

  transition: 0.04s ease outline-width;
  overflow: hidden;
`;

export const ProductTitle = styled.h3`
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;

  overflow: hidden;
`;

export const ProductDescription = styled.p`
  max-width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 1rem;
  text-overflow: ellipsis;

  overflow: hidden;
`;

export const ProductBought = styled.div`
  display: flex;
`;

export const ProductPrice = styled.p`
  font-family: var(--lexend);
  font-weight: 500;

  margin-left: auto;
`;

export const ProductQuantity = styled.p`
  font-family: var(--lexend);
  font-weight: 500;

  margin-left: auto;
`;

export const ProductTotal = styled.p`
  font-family: var(--lexend);
  font-weight: 900;

  margin-left: auto;
`;
