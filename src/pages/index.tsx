import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Obras from '../components/Obras';
import Sobre from '../components/Sobre';

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <Sobre />
      <Obras />
      <FormContato />
      <Footer />
    </>
  );
}
