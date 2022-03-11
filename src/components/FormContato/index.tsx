import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <main className="container">
        <SectionTitle title="Entre em contato" />
        <Form />
      </main>
    </Container>
  );
}

export default FormContato;
