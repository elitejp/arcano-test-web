import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration:none;
  }

  :root {
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;

    --whiteFixed: #FFFFFF
  }
  body {
    background-color: var(--whiteFixed);
  }


  button, div, label, select, h1, h2, h3, h4, h5, h6, input {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
`;
