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
        opacity: 0.7;
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

export const SIntroduce = styled.div`
  position: relative;
  padding: 100px 0;
  background-color: #fff;
  text-align: center;

  .wrap {
    .title {
      font-size: 50px;
      font-style: normal;
      line-height: 1.1;
      max-width: 950px;
      margin: 0 auto 30px;
      padding-bottom: 10px;
      font-weight: 600;
      font-style: italic;
      color: #223ea1;
    }

    .content {
      max-width: 680px;
      margin: 0 auto;

      .content_item {
        color: #9ea0a6;
        font-size: 17px;
        line-height: 1.7;
        overflow: hidden;
        font-weight: 400;
        font-style: normal;
      }
    }
  }

  @media screen and (max-width: 575px) {
    padding: 50px 0;

    .wrap {
      .title {
        font-size: 25px;
      }

      .content {
        padding: 0 10px;

        .content_item {
          font-size: 14px;
        }
      }
    }
  }
`;

export const SServices = styled.div`
  p {
    margin: 0;
  }

  .wrap {
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
          font-weight: 600;
          font-style: normal;
          line-height: 1.1;
          font-size: 38px;
        }

        .title_other {
          font-weight: 600;
          font-style: italic;
          color: #223ea1;
          line-height: 1.1;
          font-size: 42px;
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;

      .content_right {
        margin-top: 200px;

        .wrap_content_item_4 {
          height: 45vh !important;
          .content_item_4 {
            margin-top: 80px;
          }
        }
      }

      .content_side {
        width: calc(50% - 15px);

        .wrap_content_item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
          cursor: pointer;
          width: 100%;
          height: 55vh;

          .content_item {
            width: 100%;
            height: 100%;
            padding: 40px;
            transition: 0.4s all;
            position: relative;

            .content_item_base {
              .content_item_title_top {
                font-size: 17px;
                color: #ffffff;
                font-weight: 400;
                font-style: normal;
                margin-bottom: 10px;

                transition: 0.4s all;
                opacity: 1;
              }

              .content_item_title_bottom {
                font-size: 30px;
                color: #ffffff;
                font-weight: 600;
                font-style: normal;
                margin-bottom: 100px;

                transition: 0.4s all;
                opacity: 1;
              }

              .content_item_name {
                font-size: 45px;
                text-transform: uppercase;
                color: #ffffff;
                font-weight: 600;
                font-style: normal;
                text-align: center;
                padding: 100px 50px 50px;
                transition: 0.4s all;
                opacity: 1;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
              }
            }

            .content_item_float {
              position: absolute;
              width: 100%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding: 0 60px;
              text-align: center;

              .content_item_float_name {
                font-size: 17px;
                color: #ffffff;
                font-weight: 400;
                font-style: normal;

                position: absolute;
                top: -80px;
                left: 50%;
                transform: translateX(-50%);

                transition: 0.4s all;
                opacity: 0;
              }

              .content_item_float_content {
                font-size: 23px;
                color: #ffffff;
                font-weight: 500;
                font-style: normal;

                width: 80%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, 0);

                transition: 0.4s all;
                opacity: 0;
              }

              .content_item_float_see_detail {
                font-size: 16px;
                color: #ffffff;
                font-weight: 400;
                font-style: italic;
                text-decoration: underline;

                position: absolute;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);

                transition: 0.4s all;
                opacity: 0;
              }
            }
          }

          &:hover {
            .content_item {

              transform: scale(0.95);
              
              .content_item_base {
                .content_item_title_top {
                  opacity: 0;
                  transform: translateY(-10px);
                }

                .content_item_title_bottom {
                  opacity: 0;
                  transform: translateY(-10px);
                }

                .content_item_name {
                  opacity: 0.2;
                }
              }

              .content_item_float {
                .content_item_float_name {
                  opacity: 1;
                  top: -120px;
                }

                .content_item_float_content {
                  opacity: 1;
                  transform: translate(-50%, -50%);
                }

                .content_item_float_see_detail {
                  opacity: 1;
                  top: 100px;
                }
              }
            }
          }

          .content_item_1 {
            background-color: #b60252;
          }
          .content_item_2 {
            background-color: #ff0000;
          }
          .content_item_3 {
            background-color: #256d34;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .wrap .content {
      display: block;

      .content_side {
        width: unset;
      }

      .content_right {
        margin-top: 0;

        .wrap_content_item_4 {
          height: 20vh !important;

          .content_item_4 {
            margin-top: 0;
            padding: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .wrap {
      padding: 0 15px;
    }
  }

  @media screen and (max-width: 575px) {
    .wrap {
      .wrap_title {
        margin-bottom: 25px;
      }

      .content .content_side .wrap_content_item {
        .content_item .content_item_base .content_item_name {
          padding: 0;
        }
        .content_item:hover .content_item_float .content_item_float_name {
          top: -120px;
        }
      }
    }
  }
`;

export const SProjects = styled.div`
  padding: 100px 0 30px;
  position: relative;
  background-color: #fafafa;

  p {
    margin: 0;
  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 40%;
    background-color: #fafafa;
    z-index: 1;
  }

  .wrap {
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
          font-weight: 600;
          font-style: normal;
          line-height: 1.1;
          font-size: 38px;
        }

        .title_other {
          font-weight: 600;
          font-style: italic;
          color: #223ea1;
          line-height: 1.1;
          font-size: 42px;
        }
      }
    }
  }

  .slick {
    position: relative;
    z-index: 2;
    margin-bottom: 50px;

    .slick_item {
      cursor: pointer;

      .img {
        margin-bottom: 15px;
        height: 200px;
        position: relative;

        img {
          position: relative !important;
          object-fit: cover;
        }

        .text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #223ea1;
          opacity: 0;
          display: flex;
          align-items: center;
          transition: 0.4s all;

          .detail {
            font-size: 30px;
            font-style: normal;
            line-height: 1.1;
            font-weight: 500;
            font-style: italic;
            margin-left: 30px;
            text-decoration: underline;
            cursor: pointer;
            color: #ffffff;
          }
        }

        &:hover {
          .text {
            opacity: 0.8;
          }
        }
      }

      .date {
        font-weight: 500;
        font-style: normal;
        font-size: 12px;
        color: #9ea0a6;
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      .name {
        font-weight: 600;
        font-style: normal;
        color: #2b1e31;
        font-size: 17px;
        line-height: 1.3;
      }
    }
  }

  .wrap_button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;

    .button_control {
      button {
        padding: 20px 10px;
        cursor: pointer;
        background: unset;
        border: unset;
        font-size: 30px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    padding-left: 10px;
    padding-right: 10px;
    .wrap {
      .wrap_title {
        margin-bottom: 25px;
      }
    }
  }
`;

export const SAboutUs = styled.div`
  p {
    margin: 0;
  }

  .content_top {
    position: relative;

    .image_banner {
      img {
        position: relative !important;
      }
    }

    .content_top_intro {
      position: absolute;
      left: 0;
      right: 0;
      top: 65%;
      display: flex;
      justify-content: flex-end;
      z-index: 2;

      .content_top_intro_content {
        position: relative;
        z-index: 2;
        width: 70%;
        padding: 55px 120px 20px;
        background-color: #223ea1;

        .title {
          display: inline-block;
          text-transform: uppercase;
          color: #eaeaea;
          font-size: 12px;
          font-weight: 600;
          font-style: normal;
          opacity: 0.5;
        }

        .content {
          margin-top: 38px;
          max-width: 685px;
          font-weight: 400;
          font-style: normal;
          color: #eaeaea;
          font-size: 20px;
          line-height: 1.3;
        }
      }
    }
  }

  .content_bottom {
    position: relative;
    background-color: #fff;
    padding: 500px 0 80px;

    .background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 40%;
      background-color: #fafafa;
      z-index: 1;
    }

    .wrap {
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
            font-weight: 600;
            font-style: normal;
            line-height: 1.1;
            font-size: 38px;
          }

          .title_other {
            font-weight: 600;
            font-style: italic;
            color: #223ea1;
            line-height: 1.1;
            font-size: 42px;
          }
        }
      }
    }

    .slick {
      position: relative;
      z-index: 2;
      margin-bottom: 50px;

      .slick_item {
        cursor: pointer;

        .img_top {
          margin-bottom: 15px;
          position: relative;

          .img {
            height: 364px;
            img {
              position: relative !important;
              object-fit: cover;
              height: 100%;
            }
          }

          .hover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #223ea1;
            opacity: 0;
            display: flex;
            align-items: center;
            transition: 0.4s all;

            .des {
              font-size: 20px;
              font-style: normal;
              line-height: 1.1;
              font-weight: 500;
              margin-left: 30px;
              color: #ffffff;

              transition: 0.4s all;
              transform: translateY(50%);
              opacity: 0;
            }
          }
        }

        .name {
          font-size: 24px;
          line-height: 140%;
          text-align: center;
          color: #223ea1;
          margin-bottom: 4px;
          font-weight: 600;

          transition: 0.4s all;
          transform: translateY(0);
        }

        .position {
          font-size: 19px;
          line-height: 24px;
          text-align: center;
          color: #8285a7;

          margin-bottom: 20px;

          transition: 0.4s all;
          transform: translateY(0);
        }

        .wrap_button {
          display: flex;
          justify-content: center;
          transition: 0.4s all;
          transform: translateY(0);
          opacity: 0;

          .detail {
            background-color: #223ea1;
            border: unset;
            border-radius: 4px;
            padding: 10px 30px;

            font-size: 16px;
            font-style: normal;
            line-height: 1.1;
            font-weight: 500;
            color: #ffffff;
            cursor: pointer;
          }
        }

        &:hover {
          .img_top .hover {
            opacity: 0.8;

            .des {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .name {
            transform: translateY(-10%);
          }

          .position {
            transform: translateY(-10%);
          }

          .wrap_button {
            transform: translateY(-10%);
            opacity: 1;
          }
        }
      }
    }

    .wrap_button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      position: relative;
      z-index: 2;

      .button_control {
        button {
          padding: 20px 10px;
          cursor: pointer;
          background: unset;
          border: unset;
          font-size: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .content_top {
      .content_top_intro .content_top_intro_content {
        padding: 50px 80px;
        width: 80%;

        .content {
          margin-top: 20px;
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .content_top {
      .image_banner {
        display: none;
      }

      .content_top_intro {
        position: relative;

        .content_top_intro_content {
          width: 100%;
        }
      }
    }

    .content_bottom {
      padding: 100px 0 80px;
    }
  }

  @media screen and (max-width: 575px) {
    .content_top {
      .content_top_intro {
        .content_top_intro_content {
          padding: 50px 30px;
        }
      }
    }

    .content_bottom {
      padding-left: 10px;
      padding-right: 10px;
      .wrap {
        .wrap_title {
          margin-bottom: 25px;
        }
      }
    }
  }
`;

export const SMission = styled.div`
  position: relative;
  padding: 100px 0;
  background-color: #fff;
  text-align: center;

  .wrap {
    .title {
      font-size: 50px;
      font-style: normal;
      line-height: 1.1;
      max-width: 950px;
      margin: 0 auto 30px;
      padding-bottom: 10px;
      font-weight: 600;
      font-style: italic;
      color: #223ea1;
    }

    .content {
      max-width: 680px;
      margin: 0 auto;

      .content_item {
        color: #9ea0a6;
        font-size: 17px;
        line-height: 1.7;
        overflow: hidden;
        font-weight: 400;
        font-style: normal;
      }
    }
  }

  @media screen and (max-width: 575px) {
    padding: 50px 0;

    .wrap {
      .title {
        font-size: 25px;
      }

      .content {
        padding: 0 10px;

        .content_item {
          font-size: 14px;
        }
      }
    }
  }
`;
