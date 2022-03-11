import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-between;
  background: #1e3a8a;
  height: auto;
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
        font-size: 1rem;
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

  @media (max-width: 1000px) {
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
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
        color: #fff;
      }
      span {
        font-size: 0.8rem;
        color: #fff;
      }
    }
    .sociais {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      border-left: 1px solid #fff;
      padding-left: 1rem;
      h1 {
        font-size: 1.5rem;
        color: #fff;
      }

      > div {
        display: flex;
        font-size: 50px;
        color: #fff;
      }
    }
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    .logobranca {
      border-bottom: 1px solid #fff;
      border-right: none;
      padding-right: 0;
      img {
        height: 100px;
        width: 150px;
      }
    }
    .endereco {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 1px solid #fff;

      h1 {
        color: #fff;
        font-size: 1.2rem;
      }
      p {
        font-size: 1rem;
        color: #fff;
      }
      span {
        font-size: 1rem;
        color: #fff;
      }
    }
    .sociais {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      border-left: none;
      padding-left: none;
      h1 {
        font-size: 1.5rem;
        color: #fff;
      }

      > div {
        display: flex;
        font-size: 50px;
        color: #fff;
      }
    }
  }
`;
