import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  body, h1, h2, h3, h4, h5, h6, p, ul, li{
    padding : 0;
    margin : 0;
  }

  body {
    font-family: 'Geologica', sans-serif;
  }

  .rc-pagination {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 45px;
    padding: 0;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
  .rc-pagination ul,
  .rc-pagination ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .rc-pagination::after {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    content: " ";
  }
  .rc-pagination-total-text {
    display: inline-block;
    height: 28px;
    margin-right: 8px;
    line-height: 26px;
    vertical-align: middle;
  }
  .rc-pagination-item {
    display: inline-block;
    min-width: 30px;
    height: 30px;
    margin-right: 1px;
    font-family: Arial;
    line-height: 26px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    background-color: #005ac1;
    border: unset;
    border-radius: unset;
    outline: 0;
    cursor: pointer;
    user-select: none;
  }
  .rc-pagination-item a {
    display: block;
    padding: 5px 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: white;
    transition: none;
  }
  .rc-pagination-item a:hover {
    text-decoration: none;
  }
  .rc-pagination-item:focus,
  .rc-pagination-item:hover {
    transition: all 0.3s;
  }
  /* .rc-pagination-item:focus a,
  .rc-pagination-item:hover a {
    color: #1890ff;
  } */
  .rc-pagination-item-active {
    border: unset;
    background: #1296ba;
  }
  /* .rc-pagination-item-active a {
    color: #1890ff;
  } */
  .rc-pagination-item-active:focus,
  .rc-pagination-item-active:hover {
    border: unset;
    background: #1296ba;
  }
  /* .rc-pagination-item-active:focus a,
  .rc-pagination-item-active:hover a {
    color: #40a9ff;
  } */
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    outline: 0;
  }
  .rc-pagination-jump-prev button,
  .rc-pagination-jump-next button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  .rc-pagination-jump-prev button:after,
  .rc-pagination-jump-next button:after {
    display: block;
    content: "•••";
  }
  .rc-pagination-prev,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    margin-right: 1px;
  }
  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    display: inline-block;
    min-width: 28px;
    height: 28px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 28px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .rc-pagination-prev,
  .rc-pagination-next {
    outline: 0;
    min-width: 30px;
    height: 30px;
    border-radius: unset;
  }
  .rc-pagination-prev button,
  .rc-pagination-next button {
    cursor: pointer;
    user-select: none;
    border-radius: unset;
  }
  .rc-pagination-prev:hover button,
  .rc-pagination-next:hover button {
    border: unset;
  }
  .rc-pagination-prev .rc-pagination-item-link,
  .rc-pagination-next .rc-pagination-item-link {
    display: block;
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: white;
    text-align: center;
    background-color: #005ac1;
    border: unset;
    border-radius: 2px;
    outline: none;
    transition: all 0.3s;
  }
  .rc-pagination-prev:focus .rc-pagination-item-link,
  .rc-pagination-next:focus .rc-pagination-item-link,
  .rc-pagination-prev:hover .rc-pagination-item-link,
  .rc-pagination-next:hover .rc-pagination-item-link {
    color: white;
    border-color: #142A4A;
  }
  .rc-pagination-prev button:after {
    content: "<";
    display: block;
  }
  .rc-pagination-next button:after {
    content: ">";
    display: block;
  }
  .rc-pagination-disabled,
  .rc-pagination-disabled:hover,
  .rc-pagination-disabled:focus {
    cursor: not-allowed;
  }
  .rc-pagination-disabled .rc-pagination-item-link,
  .rc-pagination-disabled:hover .rc-pagination-item-link,
  .rc-pagination-disabled:focus .rc-pagination-item-link {
    color: white;
    border-color: #142A4A;
    cursor: not-allowed;
  }
  .rc-pagination-slash {
    margin: 0 10px 0 5px;
  }
  .rc-pagination-options {
    display: inline-block;
    margin-left: 16px;
    vertical-align: middle;
  }
  @media all and (-ms-high-contrast: none) {
    .rc-pagination-options *::-ms-backdrop,
    .rc-pagination-options {
      vertical-align: top;
    }
  }
  .rc-pagination-options-size-changer.rc-select {
    display: inline-block;
    width: auto;
    margin-right: 8px;
  }
  .rc-pagination-options-quick-jumper {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
  }
  .rc-pagination-options-quick-jumper input {
    width: 50px;
    margin: 0 8px;
  }
  .rc-pagination-simple .rc-pagination-prev,
  .rc-pagination-simple .rc-pagination-next {
    height: 24px;
    line-height: 24px;
    vertical-align: top;
  }
  .rc-pagination-simple .rc-pagination-prev .rc-pagination-item-link,
  .rc-pagination-simple .rc-pagination-next .rc-pagination-item-link {
    height: 24px;
    background-color: transparent;
    border: 0;
  }
  .rc-pagination-simple .rc-pagination-prev .rc-pagination-item-link::after,
  .rc-pagination-simple .rc-pagination-next .rc-pagination-item-link::after {
    height: 24px;
    line-height: 24px;
  }
  .rc-pagination-simple .rc-pagination-simple-pager {
    display: inline-block;
    height: 24px;
    margin-right: 8px;
  }
  .rc-pagination-simple .rc-pagination-simple-pager input {
    box-sizing: border-box;
    height: 100%;
    margin-right: 8px;
    padding: 0 6px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: none;
    transition: border-color 0.3s;
  }
  .rc-pagination-simple .rc-pagination-simple-pager input:hover {
    border-color: #1890ff;
  }
  .rc-pagination.rc-pagination-disabled {
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item {
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item a {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    border: none;
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-active {
    background: #1296ba;
    border-color: transparent;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-active a {
    color: #ffffff;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-link {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: black;
    cursor: not-allowed;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-link-icon {
    opacity: 0;
  }
  .rc-pagination.rc-pagination-disabled .rc-pagination-item-ellipsis {
    opacity: 1;
  }
  @media only screen and (max-width: 992px) {
    .rc-pagination-item-after-jump-prev,
    .rc-pagination-item-before-jump-next {
      display: none;
    }
  }
  @media only screen and (max-width: 991px) {
    .rc-pagination{
      margin-top: 40px;
    }
  }
  @media only screen and (max-width: 767px) {
    .rc-pagination{
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 575px) {
    .rc-pagination-options {
      display: none;
    }

    .rc-pagination-item {
      margin-right: 1px;
  }
  }
`;
