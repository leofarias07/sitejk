import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <main className="container">
        <SectionTitle title="Entre em contato" />
        <Form data-aos="fade-up" />
      </main>
    </Container>
  );
}

export default FormContato;
