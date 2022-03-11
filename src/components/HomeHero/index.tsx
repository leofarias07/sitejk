import { Container } from './styles';
import bannerImg from '../../assets/silo.jpg';

function HomeHero() {
  return (
    <Container>
      <img src={bannerImg} alt="Logo" />
    </Container>
  );
}

export default HomeHero;
