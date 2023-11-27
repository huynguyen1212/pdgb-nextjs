import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
      text-decoration: none;
      &:hover {
          text-decoration: none;
          color: unset;
      }
      &:focus {
          outline: none;
      }
  }

  ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
  }

  button {
      border: none;
      outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-size: initial;
      margin-bottom: 0;
      font-style: initial;
  }

  p {
      font-size: 14px;
      margin-bottom: 0;
      font-style: initial; 
  }

  body {
    font-family: 'Geologica', sans-serif;
    height: auto;
    background: #F4F4F4;
  }

  #root {
    height: 100%;
  }
  .page-content {
      padding: 24px 16px 20px 16px;
      &-title {
          color: #1C48E7;
          font-weight: 700;
          font-size: 24px;
          padding: 8px 0px;
      }
  }

  .page-content-detail {
      padding: 24px 32px;
      &-title {
          font-weight: 700;
          font-size: 18px;
          color: #000000;
          padding:0px; 
          padding-bottom: 16px;
          border-bottom: 1px solid #BEBEBE;
      }
  }

  .input-search {
      padding: 6px 8px;
      font-size: 14px;
      border: 1px solid #C0C0C0;
      border-radius: 8px;
      background: #FFFFFF;
      max-width: 360px;
      min-height: 40px;
      .ant-input {
          font-size: 16px;
      }
  }

  .button-add {
      display: flex;
      background: #1C48E7;
      border-radius: 8px;
      padding: 4px 12px;
      align-items: center;
      color: #fff;
      min-height:40px;
      justify-content: center;
      font-weight: 700;
      border-color: #1C48E7;
      &-icon {
          margin-right: 4px;
      }
  }
  .dividing-line {
      width: 100%;
      height: 4px;
      background: linear-gradient(180deg, rgba(9, 30, 66, 0.13) 0%, rgba(9, 30, 66, 0.13) 25%, rgba(9, 30, 66, 0.08) 25.01%, rgba(9, 30, 66, 0) 100%);
  }

  .page-note {
      text-align: center;
      &-text {
          font-size: 24px;
          color: #091E42;
      }
  }

  .invalid-feedback {
      color: red;
      margin-top: 2px;
  }
  .civil-content-page {
      background: #F5F5F5;
      min-height: calc(100vh - 69px);
  }

  .border-bottom-title {
      border-bottom: 1px solid #C0C0C0;
  }

  .page-content-table {
      background: #FFFFFF;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
  }

  .pagination-infor {
      color: #2E2E2E;
      font-weight: 700;
      font-size: 14px;
  }

  .pagination-options.ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: 1px solid #C0C0C0;
      border-radius: 8px;
      color: #272122;
      font-size: 16px;
  }

  .main-block {
      background: #FFFFFF;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
      border-radius: 8px
  }

  .position-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  /* .ant-input {
    margin-bottom: 20px;
  } */

  .ant-input:-webkit-autofill,
  .ant-input:-webkit-autofill:hover, 
  .ant-input:-webkit-autofill:focus, 
  .ant-input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }


  .height-content-modal-preview {
      height: calc(100vh - 270px);
  }

  .x-spreadsheet-sheet {
      width: 100% !important;
  }

  .x-spreadsheet-menu .x-spreadsheet-icon {
      display: none;
  }

  .x-spreadsheet-menu .x-spreadsheet-dropdown .x-spreadsheet-icon {
      display: block;
  }
  .close-modal {
      position: absolute;
      right: 8px;
      top: 8px;
  }
  .text-blue {
      color: #1C48E7;
  }

  .page-only-header-title {
      display: flex;
      align-items: center;
      padding: 10px 0px;
      background: #F5F5F5;
      border-bottom: 1px solid #C0C0C0;
      .page-note-text {
          color: #1C48E7;
          font-weight: 700;
          font-size: 24px;
      }
      .page-detail-note {
          color: #C0C0C0;
          font-weight: 700;
          font-size: 24px;
      }
      .text-blue {
          color: #1C48E7;
      }
  }

  .inprogress-color {
      background: #FFF0CA !important;
      color: #27AE60 !important;
  }

  .approved-color {
      background: #D4FAD4 !important;
      color: #27AE60 !important;
  }

  .reject-color {
      background: #FEE9DE !important;
      color: #EA9617 !important;
  }

  .expired-color {
      background: #C0C0C0 !important;
      color: #272122 !important;
  }

  .input-search-staff {
      max-width: 360px !important;
      width: 360px !important;
  }

  .license-chart {
      background: #fff;
      border-radius: 8px;
      padding: 30px 13px;
      margin-bottom: 30px;
  }

  .time-line-license {
      position: relative;
      .main-line {
          background: #E9EBEE;
          width: calc(100% - 30px);
          height: 8px;
          position: absolute;
          top: 28px;
      }
      .time-line-points {
          display: flex;
          justify-content: space-between;
      }

      .time-line-point {
          .icon {
              width: 3px;
              height: 22.067px;
              background: #E9EBEE;
          }
      }
  }

  .profile_user {
      width: 687px;
      padding: 20px 16px 32px;
      background: #fff;
      border-radius: 8px;
      margin: 0 auto;
      &-title {
          color: #1C48E7;
          font-size: 16px;
          font-weight: 700;
          padding-bottom: 12px;
          border-bottom: 1px solid #EAEAEA;
      }
      &-avatar {
          width: 150px;
          position: relative;
          .avatar {
              width: 150px;
              height: 150px;
              border-radius: 50%;
              object-fit: cover;
          }
          .icon-edit {
              cursor: pointer;
              position: absolute;
              right: 14px;
              top: 115px;
          }
      }
      &-info {
          width: calc(100% - 150px - 24px);
          margin-left: 24px;
          .input-form {
              background: #EAEAEA;
              border: 1px solid #C0C0C0;
              min-height: 48px;
          }
      }
  }

  .not-found-page {
      background: #F5F5F5;
      min-height: 100vh;
  }

  //ant
  .pagination-main {
      .ant-pagination-item-link, .ant-pagination-item {
          border: none;
      }
      .ant-pagination-item-link {
          display: flex;
          align-items: center;
      }
      .ant-pagination-next {
          .ant-pagination-item-link {
              justify-content: end;
          }
      }
      .ant-pagination-item {
          border-radius: 50%;
      }
      a {
          font-weight: 700;
          color: #272122;
      }
      .ant-pagination-item-active {
          background: #1C48E7;
          border-radius: 50%;
          border: none;
          a {
              color: #F4F5F7
          }
      }
  }

  .ant-radio-checked .ant-radio-inner {
      border-color: #1C48E7;
  }

  .ant-radio-inner::after {
      background-color: #1C48E7;
  }

  .ant-radio-wrapper:hover .ant-radio, .ant-radio:hover .ant-radio-inner, .ant-radio-input:focus + .ant-radio-inner {
      border-color: #1C48E7;
  }

  .ant-radio-checked::after {
      border-color: #1C48E7;
  }

  .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
      display: none;
  }

  .ant-table-thead>tr>th {
      background: #F4F4F4;
      padding: 12px;
      font-size: 16px;
      font-weight: 700;
      color: #272122;
  }

  .ant-table-wrapper tr:nth-child(2n) td {
      background: #F4F4F4 !important;
  }

  .ant-table-wrapper tr td {
      font-weight: 400;
      font-size: 16px;
      color: #2E2E2E;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td, .ant-table-tbody > tr > td.ant-table-cell-row-hover {
      background: unset;
  }

  .antd-select-custom.ant-select:not(.ant-select-customize-input) .ant-select-selector {
      padding: 9px 12px;
      border: 1px solid #C0C0C0;
      border-radius: 8px;
  }

  .antd-select-custom.ant-select-multiple .ant-select-selection-overflow-item + .ant-select-selection-overflow-item .ant-select-selection-search {
      margin-inline-start: 0;
  }

  .antd-select-custom.ant-select-multiple .ant-select-selection-placeholder {
      left: 12px;
      right: 12px;
  }

  .antd-select-custom .ant-select-selection-item {
      background: #C6D2FF;
      border-radius: 50px;
      color: #2E2E2E;
      line-height: 20px;
  }

  .antd-select-custom.ant-select-multiple .ant-select-selection-item-remove > .anticon {
      color: #fff;
      background: #1C48E7;
      border-radius: 50px;
      width: 16px;
      height: 16px;
      line-height: 12px;
  }

  .antd-select-custom.ant-select-multiple .ant-select-selection-item-remove svg {
      width: 8px;
  }

  .ant-form .labe-form {
      margin-bottom: 5px;
      color: #2E2E2E;
      font-weight: 700;
      font-size: 16px;
      display: inline-block;
      span {
          color: #CA3F4B;
      }
  }
  .input-form {
      background: #FFFFFF;
      border: 1px solid #C0C0C0;
      border-radius: 8px;
      padding: 12px 16px;
      color: #272122;
      font-size: 16px;
  }

  .button-antd-custom {
      display: flex;
      background: #1C48E7;
      border-radius: 8px;
      padding: 4px 12px;
      align-items: center;
      justify-content: center;
      color: #fff;
      min-height:40px;
      font-weight: 700;
      font-size: 16px;
      img {
          margin-right: 4px;
      }
  }

  .button-form {
      background: #EAEAEA;
      border-radius: 8px;
      color: #2E2E2E;
      width: 50%;
      padding: 10px;
      height: auto;
      font-weight: 700;
      font-size: 16px;
  }
  .button-form-Submit {
      background: #1C48E7;
      color: #FFFFFF;
  }

  .button-form-Submit.ant-btn[disabled], .button-form-Submit.ant-btn[disabled]:hover, .button-form-Submit.ant-btn[disabled]:focus, .button-form-Submit.ant-btn[disabled]:active {
      background: #A3BDFC;
      border-color: #A3BDFC;
      color: #FFFFFF;
  }

  .upload-file-form {
      display: flex;
      flex-direction: column-reverse;
      .ant-upload {
          width: 100%;
          .ant-btn {
              width: 100%;
              min-height: 48px;
              background: #FFFFFF;
              border: 1px dashed #C0C0C0;
              border-radius: 8px;
              padding: 8px 16px;
              font-size: 16px;
          }
      }
      .ant-upload-list-text-container {
          margin-bottom: 8px;
          
      }
      .ant-upload-list-item {
          height: auto;
          margin-top: 0px;
      }
      .ant-upload-list-item:hover .ant-upload-list-item-info {
          background: #1C48E7;
      }
      .ant-upload-list-item-info {
          background: #1C48E7;
          border-radius: 8px;
          padding: 12px 10px;
          .ant-upload-list-item-card-actions-btn {
              opacity: 1;
          }
          .ant-btn-icon-only.ant-btn-sm > *  {
              font-size: 18px;
          }
          .ant-upload-text-icon {
              display: none;
          }
          .ant-upload-list-item-name {
              color: #FFFFFF;
              text-align: center;
              font-size: 16px;
              line-height: 24px;
          }
      }
      .ant-upload-list-text-container {
          .ant-tooltip {
              display: none;
          }
      }
  }

  .ant-input-number {
      border: 1px solid #CED4DA;
      .ant-input-number-input {
          padding: 0px;
      }
  }
  .ant-input-number-handler-wrap {
      border-radius: 0 8px 8px 0;
  }

  .ant-input-number:focus, .ant-input-number-focused, .ant-input-number:hover {
      border-color: #2263CB;
  }

  .ant-input-number-disabled {
      background: #EAEAEA;
      border-color: #C0C0C0;
  }

  .ant-input-number-disabled:focus, .ant-input-number-disabled-focused, .ant-input-number-disabled:hover {
      border-color: #C0C0C0;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: 1px solid #C0C0C0;
      border-radius: 8px;
      padding: 4px 16px;
      height: auto;
      color: #2E2E2E;
  }

  .ant-form-item {
      margin: 0px;
  }

  .ant-btn-primary {
      background-color: #1C48E7;
  }
  .ant-modal-footer {
      border: none;
  }
  .button-antd-custom.ant-btn:hover, 
  .button-add.ant-btn:hover, 
  .button-antd-custom.ant-btn:focus, 
  .button-add.ant-btn:focus, 
  .button-antd-custom.ant-btn:active,
  .button-add.ant-btn:active,
  .button-form-Submit.ant-btn:hover, 
  .button-form-Submit.ant-btn:focus, 
  .button-form-Submit.ant-btn:active,
  .login__form__button.ant-btn:hover, 
  .login__form__button.ant-btn:focus, 
  .login__form__button.ant-btn:active
      {
      background-color: #0E28A6;
      border-color: #0E28A6;
      color: #FFFFFF;
  }

  .delete-Modal {
      .ant-modal-content {
          filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.11));
          border-radius: 8px
      }
  }

  .ant-picker {
      border: 1px solid #C0C0C0;
      border-radius: 8px;
      padding: 8px 16px;
      min-height: 48px;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-search{
      display: flex;
      align-items: center;
  }

  .company-page .ant-table-wrapper tr td  {
      padding: 12px 16px;
  }

  .company-page .ant-table-wrapper tr th {
      padding: 12px 16px;
  }

  .ant-table-thead > tr > th {
      white-space: nowrap;
  }

  .ar-switch.ant-switch {
      background: #C0C0C0;
      min-width: 46px;
      height: 26px;
  }

  .ar-switch.ant-switch .ant-switch-handle {
      top: 4px;
      left: 4px;
  }

  .ar-switch.ant-switch.ant-switch-checked .ant-switch-handle {
      left: calc(100% - 18px - 4px);
  }

  .ar-switch.ant-switch.ant-switch-checked {
      background:#27AE60;
  }

  .ant-picker-clear {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .ant-picker-suffix {
      cursor: pointer;
      pointer-events: all;
  }

  .anticon.anticon-close-circle svg {
      vertical-align: unset;
  }

  .ant-radio-inner  {
      width: 20px;
      height: 20px;
  }

  .ant-select-dropdown {
      z-index: 999;
  }

  .main-modal {
      .ant-modal-content {
          filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.11));
          border-radius: 8px
      }
  }


  .input-price .ant-input-number::before {
      content: '円';
      position: absolute;
      top: 10px;
      right: 24px;
  }

  .input-price .ant-input-number-input {
      width: 95%;
  }

  .ant-input-password-icon.anticon {
      color: #272122;
  }

  .ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
      background: #EAEAEA;
  }

  .ant-input-affix-wrapper-disabled {
      background: #EAEAEA;
  }

  .ant-tabs .ant-tabs-tab {
      width: 50%;
      justify-content: center;
  }

  .ant-tabs-tab .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 500;
      color:#818181;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color:#1890ff;
  }

  .ant-tabs-nav {
    &::before {
        border-bottom: 1px solid #d9d9d9c4 !important;
    }
  }

  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-operations {
      display: none;
  }

  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
      width: 100%;
  }

  .license-time-line.react-calendar-timeline .rct-vertical-lines .rct-vl {
      border-left: 0px
  }

  .license-time-line.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-vl-first {
      border: none;
  }

  .license-time-line.react-calendar-timeline .rct-sidebar {
      height: auto !important;
  }

  .license-time-line .custom-group {
      display: flex;
      flex-direction: column;
  }

  .license-time-line.react-calendar-timeline .rct-header-root div:first-child {
      height: 16px !important;
      top: 24px;
  }

  .license-time-line.react-calendar-timeline .rct-sidebar .rct-sidebar-row {
      border: 0px;
  }

  .license-time-line.react-calendar-timeline .rct-sidebar {
      border: 0px;
  }

  .license-time-line.react-calendar-timeline .rct-horizontal-lines .rct-hl-even, .license-time-line.react-calendar-timeline .rct-horizontal-lines .rct-hl-odd {
      border-bottom: 0px;
  }

  .license-time-line.react-calendar-timeline .rct-calendar-header div:nth-child(2) .rct-dateHeader  {
      font-size: 9px;
  }

  .license-time-line.react-calendar-timeline .rct-dateHeader{
      border-bottom: 0px;
      background: #1C48E7;
      height: 8px;
      display: block;
  }

  .license-time-line.react-calendar-timeline .rct-calendar-header {
      border: none;
  }

  .license-time-line .rct-items .rct-item {
      font-size: 14px !important;
      font-weight: 400;
      background: #0096E8 !important;
      height: 17px !important;
      border: 0px !important;
  }

  .license-time-line.react-calendar-timeline .rct-item .rct-item-content {
      height: 25px;
      line-height: 25px;
      color: #272122;
      position: absolute;
      top: 20px;
      padding: 0px;
      left: calc(50% - 38px);
      overflow:visible;
      white-space: nowrap;
      cursor: default;
  }
  
  .license-time-line.react-calendar-timeline .rct-sidebar .rct-sidebar-row.rct-sidebar-row-odd {
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
  }

  .license-time-line.react-calendar-timeline .rct-horizontal-lines .rct-hl-odd {
      background-color: #FFFFFF;
  }

  .license-time-line.react-calendar-timeline .rct-header-root {
      background: #FFFFFF;
      border-bottom: 0px;
  }

  .license-time-line.react-calendar-timeline .rct-dateHeader span {
      position: absolute;
      color: #272122;
      font-weight: 700;
      font-size: 16px;
      top: -30px;
      left: -30px;
  }

  .license-time-line.react-calendar-timeline .rct-dateHeader.start-time-line{
      span {
          left: 0px;
      }
  }

  .license-time-line.react-calendar-timeline .rct-dateHeader.end-time-line{
      span {
          left: -68px;
      }
  }

  .license-time-line.react-calendar-timeline .rct-dateHeader::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 22.067px;
      background: #1C48E7;
      border-radius: 10px;
      top: -6px;
      left: -4px;
  }


  .license-time-line .now-date-icon {
      width: 15px !important; 
      height: 22px !important;
      position: absolute;
      left: -7.5px;
  }

  .license-time-line.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-day-6, .license-time-line.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-day-0 {
      background: #fff;
  }

  // line-clamp
  .line-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  .line-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  .line-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  .line-4 {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  .line-5 {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  .line-6 {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  a {
      text-decoration: none;
      &:hover {
          text-decoration: none;
      }
  }

  ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
  }

  button {
      border: none;
      outline: none;
  }

  .scroll-custom {
      &::-webkit-scrollbar {
          width: 3px;
          height: 3px;
      }
      &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(216, 214, 214, 0.993);
      }
      &::-webkit-scrollbar-thumb {
      background: rgb(200, 200, 200);
      }
  }

  .scroll-punchie {
      &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
      }
      &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(216, 214, 214, 0.993);
      }
      &::-webkit-scrollbar-thumb {
      background: rgb(200, 200, 200);
      }
  }
`;
