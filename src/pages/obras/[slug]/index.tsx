import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import BannerObra from '../../../components/BannerObra';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ObraContainer } from '../../../styles/ObraStyles';

interface IObra {
  slug: string;
  title: string;
  city: string;
  description: string;
  thumbnail: string;
}

interface ObraProps {
  obra: IObra;
}

export default function Obra({ obra }: ObraProps) {
  return (
    <ObraContainer>
      <Header />
      <BannerObra title={obra.title} city={obra.city} imgUrl={obra.thumbnail} />

      <main>
        <p>{obra.description}</p>
      </main>
    </ObraContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const obras = await prismic.query([
    Prismic.predicates.at('document.type', 'obras')
  ]);

  const paths = obras.results.map(obra => ({
    params: {
      slug: obra.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('obras', String(slug), {});

  const obra = {
    slug: response.uid,
    title: response.data.title,
    city: response.data.city,
    description: response.data.description,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      obra
    },
    revalidate: 86400
  };
};
