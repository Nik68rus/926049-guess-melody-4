import {reducer, ActionType, ActionCreator} from './reducer';
import questions from './mocks/questions';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    mistakes: 0,
    step: -1,
    maxMistakes: 3,
    gameTime: 5,
    questions,
  });
});

it(`Reducer should increment current step on given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    questions,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions,
  });
});

it(`Reducer should increment mistakes on given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
    questions,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions,
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator to increment step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `incorrect`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `jazz`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
