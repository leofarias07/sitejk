import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  img {
    height: 43rem;
  }
  @media (max-width: 1000px) {
    img {
      height: 20rem;
    }
  }
  @media (max-width: 500px) {
    img {
      height: 10rem;
    }
  }
`;
