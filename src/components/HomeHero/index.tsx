import { Container } from './styles';
import bannerImg from '../../assets/hero.jpg';

function HomeHero() {
  return (
    <Container img={bannerImg}>
      <div>
        <h1 data-aos="fade-right">EMPRESA DE CONSTRUÇÃO PROFISSIONAL</h1>
        <h2 data-aos="fade-left">CONSTRUINDO SONHOS</h2>

        <div data-aos="fade-up">
          <a className="btn fourth" href="#formulario">
            Contate-nos
          </a>
        </div>
      </div>
    </Container>
  );
}

export default HomeHero;
