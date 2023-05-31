import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { getFilm } from '../../store/films-data/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';

type HeaderProps = {
  className?: string;
  title?: string;
};

function Header({className, title}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const film = useAppSelector(getFilm);
  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  const isMyListPage = AppRoute.MyList === location.pathname;
  const isReviewPage = film && AppRoute.AddReview.replace(':id', film.id.toString()) === location.pathname;

  return (
    <header className={classNames('page-header', className)}>
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {title &&
        <h1 className="page-title user-page__title">
          {title}
          {isMyListPage && <span className="user-page__film-count">9</span>}
        </h1>}

      {isReviewPage && <Breadcrumbs filmName={film.name} filmId={film.id} />}

      {isAuth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoute.SignIn}
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Sign out
            </Link>
          </li>
        </ul>
      ) : (
        <div className="user-block">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
