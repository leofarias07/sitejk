import styled from 'styled-components';

interface ObrasProps {
  imgUrl: string;
}
export const Container = styled.section`
  margin-top: 4rem;
  padding: 2rem 0 2rem;
  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    > section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      @media (max-width: 1000px) {
        gap: 2rem;
        margin-top: 0;
      }
    }
  }
  @media (max-width: 1000px) {
    margin-top: 1rem;
  }
`;

export const ObrasContainer = styled.div<ObrasProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }
      > div.overlay {
        opacity: 0.4;
      }
    }
    > button a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    font-weight: 300;
    > a {
      color: #1e40af;
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl});
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.gradient};
      opacity: 0.5;
      transition: 0.5;
    }
    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;
    }
    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;
      text-shadow: -4px 5px 22px #11172b;
    }
    h2 {
      color: #2563eb;
      font-size: 2.5rem;
      font-weight: 300;
      text-shadow: -4px 5px 22px #11172b;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    > button {
      margin: 3rem 5rem 0 0;
    }
    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }
    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }
  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }
  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }
    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }
    &:nth-child(even) {
      flex-direction: row;
      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }
      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }
      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }
  @media (max-width: 500px) {
    margin-top: 2rem;
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }
    > section {
      > div.text {
        h1 {
          font-size: 1.5rem;
        }
        h1 {
          font-size: 1rem;
        }
      }
    }
  }
`;
