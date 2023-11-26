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
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(13deg, #563CBE 3.30%, rgba(45, 101, 200, 0.30) 60%, #0889D1 106.08%);
    }
  }
`;

export default SClub;
