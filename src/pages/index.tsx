import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Obras from '../components/Obras';
import Sobre from '../components/Sobre';
import { getPrismicClient } from '../services/prismic';

interface IObras {
  slug: string;
  title: string;
  city: string;
  thumbnail: string;
}

interface HomeProps {
  obras: IObras[];
}
export default function Home({ obras }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | JK Construtora</title>
        <meta
          name="description"
          content="JK CONSTRUTORA EMPRESA DE CONSTRUÇÃO PROFISSIONAL"
        />
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
      <HomeHero />
      <Sobre />
      <Obras obras={obras} />
      <FormContato />
      <Footer />
    </>
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
    description: obra.data.description,
    thumbnail: obra.data.thumbnail.url
  }));

  return {
    props: { obras },
    revalidate: 86400
  };
};
