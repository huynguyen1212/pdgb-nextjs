import styled from "styled-components";

const SHome = styled.div``;

export default SHome;

export const SBanner = styled.div`
  position: relative;
  z-index: 70;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #1651a1;

    * {
      position: relative;
      box-sizing: border-box;
    }

    .iframely-embed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
      background: #59089e;
    }

    #app_banner {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #1651a1;
      color: #3a3535;
      z-index: 70;

      .title {
        padding-left: 1em;
        grid-column: 1 / -1;
        grid-row: 1;
        font-size: 8vw;
        width: 100%;
        z-index: 2;
        animation: outer-left 1s 1s ease both;

        .title-inner {
          display: inline-block;
          animation: inner-left 1s 1s ease both;

          .cafe,
          .mozart {
            color: #ffffff;
            animation: outer-left 1s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
          }

          .cafe {
            .cafe-inner {
              display: inline-block;
              display: inline-block;
              margin: 0;
              font-size: inherit;
              animation: inner-left 1s 1s ease both,
                text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
            }
          }

          .mozart {
            font-size: 4vw;
            display: inline-block;
            line-height: normal;
            .mozart-inner {
              margin: 0;
              font-size: inherit;
              animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
              font-weight: 400;
            }
          }
        }
      }

      @keyframes text-clip {
        from {
          clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        }
        to {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }

      @keyframes outer-left {
        from {
          transform: translateX(50%);
        }
        to {
          transform: none;
        }
      }

      @keyframes inner-left {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: none;
        }
      }

      .image {
        grid-row: 1;
        grid-column: 2;
        margin-left: -2rem;
        opacity: 0.8;
        height: 100%;
        animation: image-in 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes image-in {
          from {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      }
    }

    body {
      display: grid;
      padding: 3vmin;
      background: #e6ded7;

      &:active * {
        animation: none !important;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .banner #app_banner .title {
      padding: 0;
      display: flex;
      justify-content: center;
      line-height: 130px;

      .title-inner .cafe,
      .mozart {
        display: flex !important;
        justify-content: center !important;
      }

      .cafe {
        font-size: 120px;
      }
      .mozart {
        font-size: 55px !important;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .banner #app_banner .title {
      line-height: 100px;
      .cafe {
        font-size: 100px;
      }
      .mozart {
        font-size: 40px !important;
      }
    }
  }

  @media screen and (max-width: 575px) {
    height: 50vh;

    .banner #app_banner .title {
      line-height: 70px;
      .cafe {
        font-size: 75px;
      }
      .mozart {
        font-size: 27px !important;
      }
    }
  }
`;

export const SFormRequestCreateClub = styled.div`
  padding: 50px;
  background-image: url("https://res.edu.vn/wp-content/uploads/2022/01/unit-5-sport.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    /* background-color: rgba(246, 219, 150, 0.6); */
  }

  .form_request_create_club {
    position: relative;
    z-index: 3;
    padding: 30px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    width: 500px;
    margin: auto;
    @media screen and (max-width: 1119px) {
      width: 100%;
    }
  }

  .title_form {
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: #223ea1;
    margin-bottom: 40px;
  }

  .btn-create {
    background: #223ea1;
    border-radius: 8px;
    padding: 20px;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: 0.3s all;
    margin: 30px auto;

    &:hover {
      border: 1px solid rgb(34, 62, 161) !important;
      background: white !important;
      color: rgb(34, 62, 161) !important;
    }
    &:disabled {
      background: rgb(34, 62, 161);
      border-radius: 25px;
      color: white;
      outline: none;
      opacity: 0.7;
    }
  }

  .loader {
    margin-left: 5px;
  }
`;

export const SListClubs = styled.div`
  padding: 50px;

  .list-clubs {
    .title_clubs {
      margin-bottom: 40px;
      text-align: center;
      font-size: 30px;
      color: rgb(34, 62, 161);
      font-family: "Noto Sans", sans-serif;
    }

    .item-club {
      margin-bottom: 40px;
    }
  }
`;
