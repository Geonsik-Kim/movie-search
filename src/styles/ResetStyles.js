import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const ResetStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {height: 100%; font-size: 15px;}

  html {overflow-x:auto;min-width:1200px;-webkit-text-size-adjust: none;}

  body {
      font-family: 'NotoSansKR', dotum, '돋움', arial, sans-serif;
      font-weight: 400;
      font-size:15px;
      color: #333;
      line-height: 1.53;
      letter-spacing:-0.025em;
      word-break: keep-all;
      background-color: #f8f8f8;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-size: inherit;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
      display: block;
  }

  fieldset,
  img,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  button,
  hr {
      border: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
      font-style: normal;
  }

  table {
      width: 100%;
      table-layout: fixed;
  }

  caption,
  legend {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0;
      line-height: 0;
      border: 0;
      overflow: hidden;
  }

  img {
      border: 0;
      vertical-align: top;
      max-width: 100%;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  input[type="text"],
  input[type="password"],
  textarea {
      -webkit-appearance: none;
  }

  select,
  input,
  textarea,
  button {
      font-family: 'NotoSansKR', dotum, '돋움', arial, sans-serif;
      border-radius: 0;
  }

  button {
      overflow: visible;
      text-transform: none;
      -webkit-appearance: button;
      cursor: pointer;
      border: 0;
      background: none;
  }

  input::-ms-clear {
      display: none;
  }

  select::-ms-expand {
      display: none;
  }

  select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }

  textarea {
      resize: none;
  }

  ::placeholder {
      color: #999 !important;
  }

  :-ms-input-placeholder {
      color: #999 !important;
  }

  ::-ms-input-placeholder {
      color: #999 !important;
  }
`;

export default ResetStyles;
