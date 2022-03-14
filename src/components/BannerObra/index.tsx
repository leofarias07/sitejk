import { Container } from './styles';

interface BannerObraProps {
  title: string;
  city: string;
  imgUrl: string;
}

function BannerObra({ title, city, imgUrl }: BannerObraProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{city}</h2>
      </section>
    </Container>
  );
}

export default BannerObra;
