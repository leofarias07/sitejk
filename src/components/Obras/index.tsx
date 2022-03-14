import SectionTitle from '../SectionTitle';
import ObrasItem from './ObrasItem';
import { Container } from './styles';

interface IObras {
  slug: string;
  title: string;
  city: string;
  thumbnail: string;
}

interface ObrasProps {
  obras: IObras[];
}
function Obras({ obras }: ObrasProps) {
  return (
    <Container>
      <main className="container">
        <SectionTitle title="Ultimas Obras" />
        <section>
          {obras.slice(0, 3).map(obra => (
            <ObrasItem
              key={obra.slug}
              title={obra.title}
              city={obra.city}
              slug={obra.slug}
              thumbnail={obra.thumbnail}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}

export default Obras;
