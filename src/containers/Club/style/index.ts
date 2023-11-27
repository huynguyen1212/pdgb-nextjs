import styled from "styled-components";

const SClub = styled.div`
  min-height: 80vh;
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
  .item-sport,
  .item-member {
    margin: 15px 0;
  }
  .club-tab {
    margin: 30px 0;
  }
  .club-info {
    margin: 30px 0;
    display: flex;
    width: 100%;
    padding: 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 10px 30px 0px rgba(17, 17, 17, 0.1);
    backdrop-filter: blur(25px);
  }
  .heading {
    color: rgba(45, 101, 200, 0.3);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0.5px;
  }
`;

export default SClub;
