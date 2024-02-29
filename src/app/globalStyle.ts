import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        border:0;
    }

    html{
        font-size:62.5%;
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-style: normal;
    }

    body{
        display: flex;
        justify-content: center;
    }

    body > div{
        max-width:37.5rem;
        width: 100%;

        background-color: #fff;
    }

    button{
        background-color: transparent;
        font-family: inherit;
        font-style: inherit;
    }
`;

export default GlobalStyle;
