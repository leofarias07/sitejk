import { FormContainer, Input, TextArea } from './styles';

function Form() {
  return (
    <FormContainer data-aos="fade-up" id="formulario">
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}

export default Form;
