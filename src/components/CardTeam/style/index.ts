import styled from "styled-components";

export const StylesCard = styled.div`
  .card {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    width: 100%;
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
      background-color: rgba(246, 219, 150, 0.6);
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }

    &.card__badminton {
        background-image: url("https://hvshop.vn/wp-content/uploads/2021/10/qua-cau-long-hvshop.jpeg");
    }

    &.card__football {
        background-image: url("https://cdn.tuoitre.vn/ttct//2020/12/13/16078750289060-lich-thi-dau-bong-da-hom-nay-0211.jpg");
    }

    &.card__table-tennis {
        background-image: url("https://thethaothienlong.vn/wp-content/uploads/2022/08/cac-loai-bong-ban-1.jpg");
    }

    &.card__foosball {
        background-image: url("https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/magento/UNITED_SPORT/A6026/A6026_8.jpg");

    }

    &.card__billiard {
        background-image: url("https://sanxuatbia.com/wp-content/uploads/2020/04/2.jpg");

    }
  }

  .card__inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
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
    background: rgb(34, 62, 161);;
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
    width: 40px;
    height: 40px;
    background: #f6db96;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .card__title {
    margin-top: 50px;
    font-weight: 900;
    font-size: 25px;
    color: rgb(34, 62, 161);;
  }

  .card__subtitle {
    margin-top: 15px;
    font-weight: 400;
    font-size: 15px;
    color: rgb(34, 62, 161);;
  }

  .card__indicator {
    margin-top: 50px;
    font-weight: 500;
    font-size: 14px;
    color: rgb(34, 62, 161);;
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
`;
