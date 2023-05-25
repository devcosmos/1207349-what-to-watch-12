import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';
import { useEffect, useState } from 'react';

type CardProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

function Card({id, name, previewImage, previewVideoLink}: CardProps): JSX.Element {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [cardMouseOver, setCardMouseOver] = useState<boolean>(false);

  useEffect(()=> {
    if (cardMouseOver) {
      const timer = setTimeout(() => setPlayVideo(true), 1000);

      return () => {
        clearTimeout(timer);
        setPlayVideo(false);
      };
    } else {
      setPlayVideo(false);
    }
  }, [cardMouseOver]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setCardMouseOver(true)}
      onMouseLeave={() => setCardMouseOver(false)}
    >
      <div className="small-film-card__image">
        {playVideo
          ? <VideoPlayer url={previewVideoLink} poster={previewImage} />
          : <img src={previewImage} alt={name} width="280" height="175" /> }
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film.replace(':id', id.toString())} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default Card;
