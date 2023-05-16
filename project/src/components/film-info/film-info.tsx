import { Link, useLocation } from 'react-router-dom';
import { Film } from '../../types/films';
import { AppRoute } from '../../const';

type FilmInfoProps = {
  film: Film;
}

function FilmInfo({film}: FilmInfoProps): JSX.Element {
  const location = useLocation();
  const isFilmPage = AppRoute.Film.replace(':id', film.id.toString()) === location.pathname;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>
      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
        {isFilmPage &&
          <Link
            to={AppRoute.AddReview.replace(':id', film.id.toString())}
            className="btn film-card__button"
          >
            Add review
          </Link>}
      </div>
    </div>
  );
}

export default FilmInfo;
