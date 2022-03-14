import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ObrasContainer } from './styles';

interface ObrasProps {
  slug: string;
  title: string;
  city: string;
  thumbnail: string;
}
export default function ObrasItem({
  slug,
  title,
  city,
  thumbnail
}: ObrasProps) {
  return (
    <ObrasContainer imgUrl={thumbnail}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {city}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/obras/${slug}`}>
          <a>
            Ver Mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ObrasContainer>
  );
}
