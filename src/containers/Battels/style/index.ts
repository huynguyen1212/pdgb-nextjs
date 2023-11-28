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
  .buttons {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

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
      height: 40px;
    }
  }

  .wrap_button_submit {
    display: flex;
    justify-content: flex-end;

    .button_submit {
      height: 40px;
    }
  }

  .list_pk {
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
            margin-bottom: 50px;

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

          .content_name_category {
            color: #0a2664;
            font-size: 14px;
            margin-bottom: 5px;

            span {
              font-size: 17px;
              margin-left: 5px;
              font-weight: 600;
            }

            .uppercase {
              text-transform: uppercase;
            }
          }

          .content_coin {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: #ffc107;
            margin-bottom: 5px;
          }

          .content_name_team {
            color: #0a2664;
            font-size: 14px;

            span {
              text-transform: uppercase;
              font-size: 15px;
              font-weight: 600;
              margin-left: 5px;
            }
          }

          .content_des {
            font-size: 17px;
            line-height: 27px;
            font-weight: 400;
            color: #757984;
            margin: 10px 0;
          }
        }

        .status {
          display: flex;
          align-items: start;
          justify-content: flex-end;
          width: 100%;

          .ant-tag {
            font-size: 13px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            padding: 0 15px;
          }
        }
      }
    }
  }
`;

export const SChallengeList = styled.div`
  .title_item {
    font-size: 20px;
    font-weight: 600;
    color: #223ea1;
    margin-bottom: 40px;
  }

  .filter_button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    .filter {
      display: flex;
      gap: 34px;
      align-items: center;

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
  }

  .list_pk {
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
            margin-bottom: 50px;

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
          justify-content: flex-end;
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

export const SModalAccept = styled.div`
  padding: 20px 0 0;
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

    margin-bottom: 30px;
  }

  .labe-form {
    margin-bottom: 5px;
    color: #2e2e2e;
    font-weight: 700;
    font-size: 16px;
    display: inline-block;

    span {
      color: red;
    }
  }
`;

export const SModalConfirmMatch = styled.div`
  padding: 20px 0;

  .question {
    text-align: center;
    font-size: 20px;

    span {
      color: #223ea1;
      font-weight: bold;
    }
  }
`;

export const SSchedules = styled.div`
  .filter {
    margin-bottom: 40px;

    .labe-form {
      margin-bottom: 5px;
      color: #2e2e2e;
      font-weight: 700;
      font-size: 16px;
      display: inline-block;

      margin-right: 20px;
    }

    .input_form {
      height: 40px;
      width: 200px;
      min-height: 40px;

      .ant-select-selector {
        height: 40px;
      }
      .ant-input-number-input-wrap {
        height: 40px;
        padding: 10px;
      }
    }
  }
`;
