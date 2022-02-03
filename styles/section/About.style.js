import styled from 'styled-components';

export const About__wrapper = styled.section`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  @media screen and (max-width: 820px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const About__container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding: 40px 30px;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;
export const About__left = styled.div`
  flex: 0.6;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 16px;
    max-width: 48rem;
    line-height: 30px;
  }
  .About__Icons {
    margin-top: 20px;
    display: flex;

    a {
      font-size: 30px !important;
      color: #0078d4;
      transition: all 300ms ease-out;
      margin: 0px 5px;
      &:hover {
        color: #212121;
        transition: all 300ms ease-out;
      }
    }
    @media screen and (max-width: 820px) {
      display: none;
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 30px;
    }
  }
`;
export const About__right = styled.div`
  flex: 0.4;
  @media screen and (max-width: 820px) {
    display: flex;
    margin-top: 40px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const About__content = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  position: relative;
  .desc {
    width: 230px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;

    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.05);
    &:nth-child(1) {
      margin-bottom: 20px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
    }
    &:nth-child(3) {
      position: absolute;
      right: 0;
      top: 25%;
      margin-left: 60px;
      h1 {
        margin-bottom: 10px;
      }
      @media screen and (max-width: 820px) {
        position: relative;
        top: 0;
        margin-left: 0px;
      }
      @media screen and (max-width: 768px) {
        position: relative;
        top: 0;
        margin-left: 0px;
      }
    }

    p {
      margin-bottom: 10px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 2em;
      }
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
