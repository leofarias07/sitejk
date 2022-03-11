import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ObrasContainer } from './styles';

export default function ObrasItem() {
  return (
    <ObrasContainer imgUrl="https://th.bing.com/th/id/R.1ccab7328b41151558c72beb647be649?rik=mEid%2fkQSjtWTkQ&riu=http%3a%2f%2fll.ind.br%2fwp-content%2fuploads%2f2018%2f02%2fsilos-10.jpg&ehk=K2xkFhK0GWwALl9sBOVLsE99fjlMed6UiOK630Yhgsw%3d&risl=&pid=ImgRaw&r=0">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>Base de Silo</h1>
          <h2>- Caxias-MA</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/obras">
          <a>
            Ver Mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ObrasContainer>
  );
}
