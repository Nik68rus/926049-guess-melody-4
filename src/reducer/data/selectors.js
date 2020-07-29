import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {GameType} from '../../const';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

const randomFilter = () => {
  return Math.random() > 0.5;
};

export const getArtistQuestion = createSelector(getQuestions, randomFilter, (resultOne, resultTwo) => {
  return resultOne.filter((it) => resultTwo && it.type === GameType.ARTIST);
});

export const getGenreQuestion = createSelector(getQuestions, (questions) => {
  return questions.filter((it) => it.type === GameType.GENRE);
});
