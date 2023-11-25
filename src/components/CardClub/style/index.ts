import styled from "styled-components";

export const StylesCard = styled.div`
  .card-club {
    border-radius: 8px;
    box-shadow: 0px 10px 30px 0px rgba(17, 17, 17, 0.1);
    backdrop-filter: blur(25px);
    padding: 12px;
    background: white;
    color: rgb(34, 62, 161);
    margin: 0 0 30px;
  }

  .card-thumbnail {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  .card-name {
    font-weight: bold;
    font-size: 24px;
  }

  .card-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start;
    justify-content: center; */
  }

  .card-heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .card-button {
    background: white;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 16px;
    text-transform: uppercase;
    color: rgb(34, 62, 161);
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: transform;
    &:hover {
      transform: translate(2px, 2px);
    }
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

  .card {
    background: #191c29;
    width: 100%;
    height: 300px;
    padding: 15px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 100%);
    cursor: pointer;
    font-family: cursive;
  }

  .card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
  }
  .card:hover:before,
  .card:hover:after {
    animation: none;
    opacity: 0;
  }

  .card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }

  .card::after {
    position: absolute;
    content: "";
    top: calc(300 / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(300 / 6));
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    opacity: 1;
    transition: opacity 0.5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
`;
