import {extend} from '../../utils';
import {GameType} from '../../const';

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
  gameTime: 5,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
  GO_TO_WELCOME: `GO_TO_WELCOME`,
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },

  reset: () => {
    return {
      type: ActionType.RESET,
      payload: null,
    };
  },

  goToWelcome: () => {
    return {
      type: ActionType.GO_TO_WELCOME,
      payload: null,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;
      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;
      return extend(state, {
        mistakes,
      });

    case ActionType.RESET:
      return extend(initialState, {step: 0});

    case ActionType.GO_TO_WELCOME:
      return extend(initialState, {step: -1});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
