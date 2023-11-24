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

export const SChallengeList = styled.div`
  .filter {
    display: flex;
    gap: 34px;
    align-items: center;
    margin-bottom: 30px;

    .arrow_button {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        cursor: pointer;
      }
    }

    button {
      padding: 8px 24px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      color: #223ea1;
      transition: 0.3s all;

      &:hover {
        color: white;
        background-color: #223ea1;
      }
    }

    .date_picker {
      min-height: 38px;
      min-width: 200px;

      input {
        height: 100%;
      }
    }
  }

  .list_pk {
    .title_item {
      font-size: 20px;
      font-weight: 600;
      color: #223ea1;
      margin-bottom: 40px;
    }

    .list_main {
      .list_item {
        margin-bottom: 60px;
        padding-bottom: 50px;
        border-bottom: 1px solid #2f344752;

        display: grid;
        grid-template-columns: 1fr 5fr 1fr;

        .time_image {
          .time {
            text-align: center;
            color: #0a2664;

            .month {
              font-size: 14px;
              line-height: 17px;
              font-weight: 600;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin-bottom: 0;
            }

            .date {
              font-size: 28px;
              line-height: 35px;
              font-weight: 600;
            }
          }

          .image {
            display: flex;
            justify-content: center;
          }
        }

        .content {
          .content_date {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 15px;

            span {
              font-size: 14px;
              line-height: 19px;
              font-weight: 400;
              color: #94979f;
            }
          }

          .content_name_team {
            color: #0a2664;
            font-size: 14px;
            margin-bottom: 5px;

            span {
              text-transform: uppercase;
              font-size: 22px;
              font-weight: 600;
            }
          }

          .content_name_category {
            color: #0a2664;
            font-size: 14px;
            margin-bottom: 15px;

            span {
              text-transform: uppercase;
              font-size: 22px;
            }
          }

          .content_des {
            font-size: 17px;
            line-height: 27px;
            font-weight: 400;
            color: #757984;
            margin-bottom: 15px;
          }

          .content_coin {
            font-size: 14px;
            line-height: 1.4em;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: #0a2664;
          }
        }

        .wrap_buttons {
          display: flex;
          align-items: start;
          justify-content: center;
          width: 100%;

          .buttons {
            width: min-content;

            button:first-child {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
`;

export const SSchedules = styled.div``;
