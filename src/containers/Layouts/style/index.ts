import { mixinsFlexSpaceBetween } from "src/styles/mixins";
import styled from "styled-components";

const WrapLayout = styled.div`
  .rotate {
    position: fixed;
    right: -35px;
    bottom: -35px;
    width: 215px;
    height: 215px;
    z-index: 120;

    .circle {
      position: relative;
      width: 100%;
      padding-bottom: 215px;
      overflow: hidden;

      text {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 200px;
        cursor: pointer;

        animation-name: rotate;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes rotate {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0);
          }
        }
      }
    }

    .face {
      cursor: pointer;

      .circle_face {
        background: #ffc107;
        width: 67px;
        height: 67px;
        position: absolute;
        top: 46%;
        left: 47%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }

      .eye_left {
        background: #000000;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 39%;
        left: 40%;
        border-radius: 50%;
      }

      .eye_right {
        background: #000000;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 39%;
        left: 50%;
        border-radius: 50%;
        animation: eye 7s infinite;

        @keyframes eye {
          0% {
            clip-path: ellipse(100% 100%);
          }
          8% {
            clip-path: ellipse(55% 3%);
          }
          16% {
            clip-path: ellipse(100% 100%);
          }
          100% {
            clip-path: ellipse(100% 100%);
          }
        }
      }

      .mouth {
        width: 48px;
        height: 48px;
        position: absolute;
        top: 47%;
        left: 47%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
    }
  }
`;

export default WrapLayout;

export const StylesHeader = styled.div`
  .wrap_main_header {
    .header {
      ${mixinsFlexSpaceBetween};
      position: fixed;
      padding: 20px 75px;
      width: 100%;
      z-index: 100;
      flex-direction: row;
      transition: all 0.3s;

      &.header_lp_black {
        background: #ececec;
      }

      .logo {
        height: 30px;
        padding-right: 15px;

        .logo_main {
          width: 100%;
          height: 100%;
        }
      }

      .wrap_control {
        display: grid;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;

        .control_item {
          color: #fff;
          cursor: pointer;
          font-weight: 500;
          font-style: normal;
          transition: all 0.2s;

          &:hover {
            color: #ffc107 !important;
          }
        }

        .notification {
          position: relative;

          .bell {
            position: relative;
            width: min-content;

            &::before {
              position: absolute;
              content: "";
              background: transparent;
              height: 14px;
              bottom: -14px;
              right: 0px;
              z-index: 1001;
              min-width: 240px;
              display: none;
            }

            .icon_bell {
              cursor: pointer;
            }

            .new_noti {
              position: absolute;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              color: #fff;
              font-size: 10px;
              background-color: red;
              top: -9px;
              right: -7px;
              text-align: center;
            }

            .list_noti {
              position: absolute;
              display: none;
              min-width: 300px;
              max-height: calc(100vh - 200px);
              padding: 20px 15px;
              border: 1px solid #1651a11f;
              border-radius: 4px;
              right: -15px;
              top: 30px;
              z-index: 1000;
              background: white;
              overflow: auto;

              &::before {
                position: absolute;
                content: "";
                clip-path: polygon(50% 32%, 0% 100%, 100% 100%);
                background: #1651a1;
                width: 11px;
                height: 14px;
                top: -14px;
                right: 18px;
                z-index: 1001;
              }

              .title {
                font-size: 18px;
                font-weight: 600;
                color: #1c3aa9;
                margin-bottom: 15px;
              }

              .list_noti_main {
                .list_noti_item {
                  margin-bottom: 15px;
                  padding: 0 0 15px;
                  border-bottom: 1px solid #1651a11f;

                  .title_noti {
                    font-size: 15px;
                    font-weight: 700;
                    color: #223ea1;
                  }

                  .sender_noti {
                    font-size: 13px;
                    font-weight: 600;
                    span {
                      color: #223ea1;
                      font-size: 15px;
                    }
                  }

                  .content_noti {
                    font-size: 14px;
                    color: #334155;
                  }

                  .time_noti {
                    font-size: 12px;
                    color: #1e293b;
                  }

                  &:last-child {
                    padding: 0;
                    border: unset;
                    margin-bottom: unset;
                  }
                }

                .list_noti_item_unread {
                  position: relative;
                  &::before {
                    position: absolute;
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 2px;
                    background: #1c48e7;
                  }
                }
              }
            }

            &:hover {
              .list_noti {
                display: block;
              }

              &::before {
                display: block;
              }
            }
          }
        }

        .wrap_button_login {
          .button_login {
            padding: 5px 15px;
            background-color: #fff;
            color: #223ea1;
            border-radius: 2px;
            transition: all 0.2s;
            position: relative;
            z-index: 1;

            .email {
              position: absolute;
              top: 34px;
              right: 0;
              z-index: 2;
              padding: 5px 10px;
              background: white;
              border-radius: 3px;
              display: none;
            }

            &:hover {
              background-color: #223ea1;
              color: #ffc107 !important;

              .email {
                display: block;
                color: #223ea1;
              }
            }
          }
        }

        .open_menu {
          color: #fff;
          cursor: pointer;
          font-weight: 500;
          font-style: normal;
          padding-right: 8px;
          transition: all 0.2s ease-in-out;
          display: flex;
          align-items: center;

          span {
            margin-right: 10px;
          }

          &:hover {
            color: #ffc107 !important;
            svg path {
              stroke: #ffc107 !important;
            }
          }
        }
      }
    }
  }

  .wrap_menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: #1651a1;
    z-index: 98;
    transition: all 0.8s cubic-bezier(0.54, 0.1, 0, 0.99);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

    &.show {
      height: 100vh;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .menu {
      position: relative;
      height: 100vh;

      .close_menu {
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        font-style: normal;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;

        position: absolute;
        right: 0;
        top: 60px;
        z-index: 220;

        span {
          margin-right: 10px;
        }

        svg {
          width: 23px;
          height: 23px;
        }

        &:hover {
          color: #ffc107 !important;
        }
      }

      .main_menu {
        height: 100%;

        .menu_item {
          height: 100vh;
          display: flex;
          align-items: center;

          .menu_item_in {
          }
        }

        .menu_left {
          .menu_left_item {
            padding: 0;
            margin: 0;
            background-color: transparent;
            min-height: fit-content;
            font-weight: 800;
            a {
              text-decoration: none;
            }

            &-container {
              overflow: hidden;
              padding: 20px 0;
              padding-right: 30px;
            }

            h1 {
              color: transparent;
              -webkit-text-stroke-width: 0.5px;
              -webkit-text-stroke-color: white;
              font-size: 47px;
              font-weight: bold;
              letter-spacing: 2px;
              margin: 0;
              text-transform: uppercase;
              cursor: pointer;
              position: relative;
              transition: 0.4s;
              will-change: transform;

              &:before {
                color: white;
                transition: 0.2s;
                position: absolute;
                content: "|";
                width: 20px;
                top: 0;
                left: -30px;
                bottom: 0;
              }
            }

            .inner-value {
              position: absolute;
              display: block;
              inset: 0;
              overflow: hidden;
              backface-visibility: hidden;
              transform: translate3d(-100%, 0, 0);
              &::before {
                width: 100%;
                display: block;
                content: attr(data-text);
                color: white;
                transition: 0.8s cubic-bezier(0.54, 0.1, 0, 0.99);
                overflow: hidden;
                backface-visibility: hidden;
                transform: translate3d(100%, 0, 0);
              }
            }

            h1 span {
              transition: 0.8s cubic-bezier(0.54, 0.1, 0, 0.99);
            }
            a:hover {
              h1 {
                transform: translate3d(30px, 0, 0);
                .inner-value,
                .inner-value:before {
                  transform: translate3d(0, 0, 0);
                }
              }
            }
          }
        }

        .menu_right {
          .menu_item_in {
            .contact {
              .logo {
                margin-bottom: 30px;
                max-width: 300px;

                .logo_main {
                  width: 100%;
                  height: 100%;
                }
              }

              p {
                font-size: 16px;
                font-style: normal;
                line-height: 1.1;

                font-weight: 500;
                color: #ffffff;
                cursor: pointer;
                margin-bottom: 15px;

                a {
                  color: #ffffff;
                  text-decoration: unset;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .wrap_main_header {
      .header {
        padding: 20px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .wrap_menu .menu .main_menu {
      .menu_right {
        display: none;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .wrap_menu .menu .main_menu {
      padding: 0 10px;

      .menu_left .menu_left_item h1 {
        font-size: 30px;
      }
    }
  }
`;

export const StylesFooter = styled.div`
  p {
    margin: 0;
  }

  position: relative;
  padding: 80px 0;
  background-color: #1651a1;

  .col_item_1 {
    .logo {
      margin-bottom: 30px;
      max-width: 300px;

      .logo_main {
        width: 100%;
        height: 100%;
      }
    }

    p {
      font-size: 16px;
      font-style: normal;
      line-height: 1.1;

      font-weight: 500;
      color: #ffffff;
      cursor: pointer;
      margin-bottom: 15px;

      a {
        color: #ffffff;
        text-decoration: unset;
      }
    }
  }

  .col_item {
    .title {
      font-size: 20px;
      font-style: normal;
      line-height: 24px;

      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .content {
      .content_item {
        margin-bottom: 9px;
        span {
          font-size: 16px;
          font-style: normal;
          line-height: 18px;

          font-weight: 500;
          color: #ffffff;
          cursor: pointer;

          &:hover {
            color: #ffc107;
          }
        }
      }

      .media {
        display: flex;
        align-items: center;

        .media_item {
          .media_icon {
            color: #ffffff;
            margin-right: 10px;
            font-size: 20px;

            &:hover {
              color: #ffc107;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .col_item_1 {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 575px) {
    .col_item_1 {
      .logo {
        margin: 0 auto 30px;
      }
    }

    .col_item {
      text-align: center;
      margin-bottom: 20px;

      .content .media {
        justify-content: center;
      }
    }
  }
`;
