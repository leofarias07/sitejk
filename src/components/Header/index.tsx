import { Container } from './styles';
import logo from '../../assets/logo.png';
import NavLink from './NavLink';

function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Minha foto" />
      </div>
      <div>
        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/obras" includes />
          <NavLink title="Sobre Nós" path="/sobrenos" includes />
          <NavLink title="Contato" path="#formulario" includes />
        </ul>
      </div>
    </Container>
  );
}

export default Header;
