import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { AppRoute, AuthStatus } from '../const';
import { Comments } from '../types/comments';

export const changeGenre = createAction<string>('films/changeGenre');
export const loadFilms = createAction<Films>('data/loadFilms');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadFilmSimilar = createAction<Films>('data/loadFilmSimilar');
export const loadFilmComments = createAction<Comments>('data/loadFilmComments');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
