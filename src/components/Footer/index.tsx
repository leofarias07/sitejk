import { Container } from './styles';
import logoBranca from '../../assets/logobranco.png';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

function Footer() {
  return (
    <Container>
      <div className="logobranca">
        <img src={logoBranca} alt="logo JK" />
      </div>
      <div className="endereco">
        <h1>Visite-nos</h1>
        <p>Morada: Rua 1° Maiio 190 4755-558 Vila Seca </p>
        <span>
          Email:jkconstrucao@gmail.com <br />
          Telefone: 99 99999-9999
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
