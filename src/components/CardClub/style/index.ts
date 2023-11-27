import styled from "styled-components";

export const StylesCard = styled.div`
  height: 100%;
  .card {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    width: 100%;
    height: 100%;
    padding: 25px;
    background-image: url("https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: block;
      z-index: 2;
      background-color: rgba(246, 219, 150, 0.5);
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }

  .card__inner {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    z-index: 3;
    width: 100%;
    height: 100%;
  }

  .card__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .card___wrapper-acounts {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
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

  .card__title {
    margin-top: 50px;
    font-weight: 900;
    font-size: 25px;
    color: rgb(34, 62, 161);
  }

  .card__subtitle {
    margin-top: 15px;
    font-weight: 400;
    font-size: 15px;
    color: rgb(34, 62, 161);
  }

  .card__indicator {
    margin-top: auto;
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
    background-color: rgb(34, 62, 161);
    border-radius: 100px;
  }

  .card__progress progress::-webkit-progress-value {
    background-color: white;
    border-radius: 100px;
  }

  .card__status {
    color: rgb(34, 62, 161);
  }

  .status {
    font-style: italic;
    font-weight: 500;
    &.active {
      color: #70ff60;
    }
    &.off {
      color: #e33636;
    }
  }

  .card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
  }
`;

export const SModalJoinClub = styled.div``;
