import styled from 'styled-components';

interface HeroProps {
  img: string;
}
export const Container = styled.div<HeroProps>`
  background: url(${props => props.img}) no-repeat center;
  position: relative;
  width: 100vw;
  height: 40rem;
  background-size: cover;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    h1 {
      margin-top: 6rem;
      color: #fff;
      border-bottom: 2px solid #fff;
    }

    h2 {
      color: #fff;
      font-size: 6rem;
      border-bottom: 2px solid #fff;
    }

    .btn {
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: transparent;
      border: 3px solid #e74c3c;
      border-radius: 0.6em;
      color: #e74c3c;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1;
      margin: 20px;
      padding: 1.2em 2.8em;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
    }
    .btn:hover,
    .btn:focus {
      color: #fff;
      outline: 0;
    }

    .fourth {
      border-color: #fff;
      color: #fff;
      background-image: -webkit-linear-gradient(
        45deg,
        #1e3a8a 50%,
        transparent 50%
      );
      background-image: linear-gradient(45deg, #1e3a8a 50%, transparent 50%);
      background-position: 100%;
      background-size: 400%;
      -webkit-transition: background 300ms ease-in-out;
      transition: background 300ms ease-in-out;
      font-size: 2rem;
    }
    .fourth:hover {
      background-position: 0;
    }
  }

  @media (max-width: 1450px) {
    > div {
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 4rem;
      }
      .fourth {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 1000px) {
    > div {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 2rem;
      }
      .fourth {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 550px) {
    > div {
      h1 {
        font-size: 1.3rem;
      }
      h2 {
        font-size: 1.8rem;
      }
      .fourth {
        font-size: 1.5rem;
      }
    }
  }
`;
