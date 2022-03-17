import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerObra from '../../../components/BannerObra';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ObraContainer } from '../../../styles/ObraStyles';
import LoadingScreen from '../../../components/LoadingScreen';

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
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ObraContainer>
      <Head>
        <title>{obra.title} | JK Construtora</title>
        <meta name="description" content={obra.description} />
        <meta property="og:image" content={obra.thumbnail} />
        <meta property="og:image:secure_url" content={obra.thumbnail} />
        <meta name="twitter:image" content={obra.thumbnail} />
        <meta name="twitter:image:src" content={obra.thumbnail} />
        <meta property="og:description" content={obra.description} />
      </Head>
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
