import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle
} from 'react-icons/ai';
import { Container } from './styles';
import logoBranca from '../../assets/logobranco.png';

function Footer() {
  return (
    <Container>
      <div className="logobranca">
        <img src={logoBranca} alt="logo JK" />
      </div>
      <div className="endereco">
        <h1>Localização</h1>
        <p>Morada: Rua São Pedro, 1551 Bairro Seriema Caxias-MA</p>
        <span>
          Email:jkconstrucaocx@gmail.com <br />
          Telefone: (98) 98603-8867
        </span>
      </div>
      <div className="sociais">
        <h1>Sociais</h1>
        <div>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
      </div>
    </Container>
  );
}

export default Footer;
