import styled from "styled-components";

export const StylesCard = styled.div`
  height: 100%;

  .card {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 20px;
    background: #e2e8f059;
    border: 1px solid #d9d9d9a3;

    .card__inner {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;

      .card__wrapper {
        position: absolute;
        z-index: 2;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .card___wrapper-acounts {
          display: flex;
          flex-direction: row;
          align-items: center;

          .card__score {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            font-size: 16px;
            color: #fff;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background: rgb(34, 62, 161);
          }

          .card__acounts {
            width: 42px;
            height: 42px;
          }

          .card__acounts svg {
            width: 100%;
            height: 100%;
          }

          .card__menu {
            background: white;
            border-radius: 5px;
            padding: 12px 24px;
            font-size: 16px;
            text-transform: uppercase;
            color: rgb(34, 62, 161);
            width: 80px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }

        .card___wrapper-acounts > div:nth-child(2) {
          position: absolute;
          left: 25px;
          z-index: -1;
        }

        .card___wrapper-acounts > div:nth-child(3) {
          position: absolute;
          left: 50px;
          z-index: -2;
        }
      }

      .wrap__card {
        position: relative;

        .card__avatar {
          width: 100%;
          height: auto;
        }

        .card__title {
          margin: 20px 0 10px;
          font-weight: 700;
          font-size: 20px;
          color: rgb(34, 62, 161);
        }

        .card__info {
          color: rgb(12, 13, 18);
          margin-bottom: 6px;
          font-size: 14px;

          span {
            margin-left: 10px;
            font-size: 16px;
            font-weight: bold;
            color: rgb(34, 62, 161);
          }
        }

        .card__status {
          .status {
            &.active {
              color: rgb(34, 161, 114);
            }
            &.off {
              color: #e33636;
            }
          }
        }

        .card__indicator {
          margin-top: 10px;
          font-weight: 500;
          font-size: 14px;
          color: rgb(34, 62, 161);
        }

        .card__progress progress {
          width: 100%;
          height: 4px;
          border-radius: 100px;
        }

        .card__progress progress::-webkit-progress-bar {
          background-color: rgb(94, 115, 191);
          border-radius: 100px;
        }

        .card__progress progress::-webkit-progress-value {
          background-color: #ffc107;
          border-radius: 100px;
        }
      }
    }

    &:hover {
      color: rgb(88 199 250 / 100%);
      transition: color 1s;
    }
  }
`;

export const SModalJoinClub = styled.div``;
