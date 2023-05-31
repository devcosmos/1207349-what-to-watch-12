import { store } from '../store/index';
import { AuthStatus, RequestStatus } from '../const';
import { UserData } from './data';
import { Reviews } from './reviews';
import { Film, Films } from './films';

export type UserProcess = {
  authStatus: AuthStatus;
  user: UserData | null;
};

export type FilmsData = {
  films: Films;
  film: Film | null;
  similarFilms: Films;
  filmReviews: Reviews;
  isFilmsDataLoading: boolean;
  reviewsPublishStatus: RequestStatus;
};

export type FilmsProcess = {
  genre: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
