import styled from "styled-components";

const SBattels = styled.div`
  padding-top: 15vh;
  padding-bottom: 60px;

  .battels_banner {
    .wrap_title {
      position: relative;
      z-index: 2;
      margin-bottom: 80px;

      .title_little {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 12px;
        color: #9ea0a6;
        font-weight: 500;
        font-style: normal;
      }

      .title {
        padding-bottom: 10px;

        .title_black {
          color: #2b1e31;
          font-weight: 500;
          font-style: normal;
          line-height: 1.1;
          font-size: 38px;
        }

        .title_other {
          font-weight: 500;
          font-style: italic;
          color: #223ea1;
          line-height: 1.1;
          font-size: 42px;
        }
      }
    }
  }

  .wrap_battels_main {
    padding: 0 80px;

    .ant-tabs-nav {
      margin-bottom: 30px;
    }
  }
`;

export default SBattels;

export const SCreateRoom = styled.div`
  .title_item {
    font-size: 20px;
    font-weight: 600;
    color: #223ea1;
    margin-bottom: 40px;
  }

  .input_form {
    height: 40px;
    width: 100%;
    min-height: 40px;

    .ant-select-selector {
      height: 40px;
    }
    .ant-input-number-input-wrap {
      height: 40px;
      padding: 10px;
    }
  }

  .input_form_textarea {
    min-height: 100px;
  }

  .button_input {
    display: grid;
    gap: 10px;
    grid-template-columns: 3fr 1fr;

    .button_all_in {
      height: 100%;
    }
  }

  .wrap_button_submit {
    display: flex;
    justify-content: flex-end;

    .button_submit {
      height: 40px;
    }
  }
`;

export const SChallengeList = styled.div``;

export const SSchedules = styled.div``;
