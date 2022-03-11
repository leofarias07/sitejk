import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-between;
  background: #1e3a8a;
  height: 300px;
  margin-top: 3rem;
  padding: 2rem 4rem 2rem;

  .logobranca {
    border-right: 1px solid #fff;
    padding-right: 2rem;
    img {
      height: 200px;
    }
  }
  .endereco {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 0.5rem;

    h1 {
      color: #fff;
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
      color: #fff;
    }
    span {
      font-size: 2rem;
      color: #fff;
    }
  }

  .sociais {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-left: 3rem;
    border-left: 1px solid #fff;

    h1 {
      font-size: 3rem;
      color: #fff;
    }

    > div {
      display: flex;
      font-size: 100px;
      color: #fff;
    }
  }

  @media (max-width: 1450px) {
    .logobranca {
      border-right: 1px solid #fff;
      padding-right: 2rem;
      img {
        height: 150px;
      }
    }
    .endereco {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 0.5rem;

      h1 {
        color: #fff;
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
        color: #fff;
      }
      span {
        font-size: 1.5rem;
        color: #fff;
      }
    }
    .sociais {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      border-left: 1px solid #fff;
      padding-left: 1rem;
      h1 {
        font-size: 2rem;
        color: #fff;
      }

      > div {
        display: flex;
        font-size: 60px;
        color: #fff;
      }
    }
  }
`;
