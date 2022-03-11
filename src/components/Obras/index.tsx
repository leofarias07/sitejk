import SectionTitle from '../SectionTitle';
import ObrasItem from './ObrasItem';
import { Container } from './styles';

function Obras() {
  return (
    <Container>
      <main className="container">
        <SectionTitle title="Ultimas Obras" />
        <section>
          <ObrasItem />
          <ObrasItem />
          <ObrasItem />
        </section>
      </main>
    </Container>
  );
}

export default Obras;
