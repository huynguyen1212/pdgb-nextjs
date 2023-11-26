import styled from "styled-components";

export const StylesCard = styled.div`
  .card {
    width: 100%;
    height: 254px;
    background: rgb(34, 62, 161);
    border-radius: 15px;
    box-shadow: 1px 5px 60px 0px #100a886b;
  }

  .card .card-border-top {
    width: 60%;
    height: 3%;
    background: white;
    margin: auto;
    border-radius: 0px 0px 15px 15px;
  }

  .card span {
    font-weight: 600;
    color: white;
    text-align: center;
    display: block;
    padding-top: 10px;
    font-size: 16px;
  }

  .card .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .card .img {
    width: 70px;
    height: 80px;
    background: #f4f4f4;
    border-radius: 15px;
    margin: auto;
    margin-top: 25px;
  }

  .card button {
    display: flex;
    flex-direction: column;
    color: rgb(34, 62, 161);
  }

  .card .email {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 12px;
  }
`;
