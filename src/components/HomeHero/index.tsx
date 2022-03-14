import { Container } from './styles';
import bannerImg from '../../assets/hero.jpg';

function HomeHero() {
  return (
    <Container imgUrl={bannerImg}>
      <div>
        <h1>EMPRESA DE CONSTRUÇÃO PROFISSIONAL</h1>
        <h2>CONSTRUÍMOS SEUS SONHOS</h2>
        <button className="btn fourth" type="submit">
          Contate-nos
        </button>
      </div>
    </Container>
  );
}

export default HomeHero;
