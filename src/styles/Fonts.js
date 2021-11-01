import { createGlobalStyle } from "styled-components";
import NotoSansKRLightWoff2 from "./fonts/NotoSansKR-Light.woff2";
import NotoSansKRLightWoff from "./fonts/NotoSansKR-Light.woff";
import NotoSansKRRegularWoff2 from "./fonts/NotoSansKR-Regular.woff2";
import NotoSansKRRegularWoff from "./fonts/NotoSansKR-Regular.woff";
import NotoSansKRMediumWoff2 from "./fonts/NotoSansKR-Medium.woff2";
import NotoSansKRMediumWoff from "./fonts/NotoSansKR-Medium.woff";

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'NotoSansKR';
        src: url(${NotoSansKRLightWoff2}) format('woff2'), url(${NotoSansKRLightWoff}) format('woff');
        font-style: normal;
        font-weight: 300;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src: url(${NotoSansKRRegularWoff2}) format('woff2'), url(${NotoSansKRRegularWoff}) format('woff');
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src: url(${NotoSansKRMediumWoff2}) format('woff2'), url(${NotoSansKRMediumWoff}) format('woff');
        font-style: normal;
        font-weight: 500;
    }
`;

export default Fonts;
