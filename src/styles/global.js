import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: #808080;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Nunito', sans-serif;
  }
  
  :root {
    --color-first: #000000;
    --color-second: #D7182A;
    --color-third: #333333;
    --color-fourth: #7A7A7A;
    --color-fifth: #585858;
    --color-sixth: #BDBDBD;

    --color-bg: #F2F2F2;
    --color-bg-second: #FFFFFF;

    --color-polygon: #F8475F;
    --color-border-bottom: #C0C0C0;
    --color-card-selected: #E6E8EA;

  }
`;

export default GlobalStyle;
