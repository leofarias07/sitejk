import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  border-bottom: 3px solid #1e40af;
  padding: 1rem 0rem 1rem;
  .logo {
    img {
      width: 180px;
      height: auto;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    .logo {
      img {
        width: 150px;
        height: auto;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }
`;
export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 1rem;
    color: ${props =>
      props.isActive ? props.theme.colors.active : props.theme.colors.primary};
    transition: 0.5s;

    font-size: 30px;
    position: relative;
    &:before {
      content: '';
      border-radius: 50px;
      bottom: 0px;
      position: absolute;
      width: 0%;
      height: 3px;
      background: #1e40af;
      transition: 0.3s;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  @media (max-width: 700px) {
    a {
      font-size: 15px;
    }
  }
  @media (max-width: 500px) {
    a {
      font-size: 12px;
    }
  }
`;
