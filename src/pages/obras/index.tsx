import Header from '../../components/Header';
import ObrasItens from '../../components/ObraItens';
import { ObrasContainer } from '../../styles/obrasStyles';

export default function Obras() {
  return (
    <ObrasContainer>
      <Header />
      <main className="container">
        <ObrasItens
          title="Obra 01"
          city="Caxias-MA"
          slug="teste"
          imgUrl="https://images.prismic.io/sitejk/44f1a0fe-345c-4013-a11f-19b8f5f5ec89_transferir.jpg?auto=compress,format"
        />
        <ObrasItens
          title="Obra 01"
          city="Caxias-MA"
          slug="teste"
          imgUrl="https://images.prismic.io/sitejk/44f1a0fe-345c-4013-a11f-19b8f5f5ec89_transferir.jpg?auto=compress,format"
        />
        <ObrasItens
          title="Obra 01"
          city="Caxias-MA"
          slug="teste"
          imgUrl="https://images.prismic.io/sitejk/44f1a0fe-345c-4013-a11f-19b8f5f5ec89_transferir.jpg?auto=compress,format"
        />
        <ObrasItens
          title="Obra 01"
          city="Caxias-MA"
          slug="teste"
          imgUrl="https://images.prismic.io/sitejk/44f1a0fe-345c-4013-a11f-19b8f5f5ec89_transferir.jpg?auto=compress,format"
        />
      </main>
    </ObrasContainer>
  );
}
