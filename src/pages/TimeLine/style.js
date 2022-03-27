import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  overflow: hidden;

  h3 {
    height: 64px;

    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;

    color: #ffffff;
    align-self: flex-start;
  }
`;
const ContainerInfo = styled.div`
  margin-top: 110px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    font-size: 33px;
    padding-left: 10px;
    & > h4 {
      text-overflow: ellipsis;
    }
  }
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media (max-width: 600) {
    width: 100%;
  }
`;

export { Container, ContainerInfo, MainContainer };
