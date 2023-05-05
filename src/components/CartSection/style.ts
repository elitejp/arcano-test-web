import styled from "styled-components";

export const StyledCartSection = styled.div`
  margin: 50px auto;
  width: fit-content;

  > ul {
    padding-top: calc(0.1vh + 0.1vw);
    overflow-x: auto;
    cursor: grab;

    &:active {
      user-select: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      display: flex;
      gap: calc(2.2vh + 2.2vw);

      > li {
        padding: 0 calc(0.1vh + 0.1vw);

        &:first-child {
          margin-left: calc(3vh + 2.6vw);
        }
        &:last-child {
          margin-right: calc(3vh + 2.6vw);
        }
      }
    }
  }
`;
