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

  .wrap_calender {
    padding: 0 20px;
  }
`;

export default SBattels;
