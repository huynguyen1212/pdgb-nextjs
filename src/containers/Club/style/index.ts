import styled from "styled-components";

const SClub = styled.div`
  min-height: 80vh;
  padding-top: 15vh;
  padding-bottom: 60px;

  .club_banner {
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

  .club-banner {
    width: 100%;
    position: relative;
    min-height: 334px;
    img {
      position: relative !important;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 1;
      aspect-ratio: 877/334;
      object-fit: cover;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        13deg,
        #563cbe 3.3%,
        rgba(45, 101, 200, 0.3) 60%,
        #0889d1 106.08%
      );
    }
  }

  .club-tab {
    margin: 30px 0;
  }

  .club-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 8px;
    background: #e2e8f059;
    backdrop-filter: blur(25px);
    margin-bottom: 50px;
    border: 1px solid #d9d9d9a3;

    .heading {
      font-size: 16px;
      color: #2b1e31;

      .info {
        color: #223ea1;
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0.5px;
        margin-left: 10px;
      }
    }
  }
`;

export default SClub;

export const SMembers = styled.div`
  .item-member {
    margin: 15px 0;
  }
`;

export const SSport = styled.div`
  .item-sport {
    margin: 15px 0;
  }
`;

export const SRequest = styled.div``;
