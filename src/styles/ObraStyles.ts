import styled from 'styled-components';

export const ObraContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: #111;
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }
    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }
    }
  }
`;
