import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import Header from '../../components/Header';
import ObrasItens from '../../components/ObraItens';
import { getPrismicClient } from '../../services/prismic';
import { ObrasContainer } from '../../styles/obrasStyles';

interface IObras {
  slug: string;
  title: string;
  city: string;
  thumbnail: string;
}

interface ObrasProps {
  obras: IObras[];
}
export default function Obras({ obras }: ObrasProps) {
  return (
    <ObrasContainer>
      <Head>
        <title>Obras | JK Construtora</title>
        <meta name="description" content="NOSSAS OBRAS JK CONSTRUTORA" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="JK CONSTRUTORA EMPRESA DE CONSTRUÇÃO PROFISSIONAL"
        />
      </Head>
      <Header />
      <main className="container">
        {obras.map(obra => (
          <ObrasItens
            key={obra.slug}
            slug={obra.slug}
            title={obra.title}
            city={obra.city}
            imgUrl={obra.thumbnail}
          />
        ))}
      </main>
    </ObrasContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const obraResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'obras')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const obras = obraResponse.results.map(obra => ({
    slug: obra.uid,
    title: obra.data.title,
    city: obra.data.city,
    thumbnail: obra.data.thumbnail.url
  }));

  return {
    props: {
      obras
    },
    revalidate: 86400
  };
};
