import Link from 'next/link';
import { Container } from './styles';

interface ObraItemProps {
  title: string;
  city: string;
  imgUrl: string;
  slug: string;
}

function ObraItens({ title, city, imgUrl, slug }: ObraItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/obras/${slug}`}>
        <a>
          <div className="overlay">
            <section>
              <h1>{title}</h1>
              <h2>{city}</h2>
            </section>
          </div>
        </a>
      </Link>
    </Container>
  );
}

export default ObraItens;
