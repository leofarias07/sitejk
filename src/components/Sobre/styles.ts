import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 7rem;
      color: #1e3a8a;
    }
    p {
      font-size: 2rem;
      text-align: center;
      font-weight: bold;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 1rem;
    > main {
      h1 {
        font-size: 5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 700px) {
    margin-top: 1rem;
    > main {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
    > main {
      h1 {
        font-size: 2.3rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;
