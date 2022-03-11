import { ReactNode } from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <div>
        <h1>{title}</h1>
      </div>
    </Container>
  );
}

export default SectionTitle;
