import { Container } from './styles';
import bannerImg from '../../assets/hero.jpg';

function HomeHero() {
  return (
    <Container img={bannerImg}>
      <div>
        <h1>EMPRESA DE CONSTRUÇÃO PROFISSIONAL</h1>
        <h2>CONSTRUINDO SONHOS</h2>
        <a className="btn fourth" href="#formulario">
          Contate-nos
        </a>
      </div>
    </Container>
  );
}

export default HomeHero;
