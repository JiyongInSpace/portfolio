import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
    }
    *{
        box-sizing: border-box;
    }
    body{
        /* font-family: "Noto Sans KR", sans-serif; */
        font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
        font-size: 15px;
        &::-webkit-scrollbar{width:5px;}
        &::-webkit-scrollbar-thumb{background-color: white;}
        &::-webkit-scrollbar-track{background-color: silver;}
    }
`;

export default GlobalStyles;

