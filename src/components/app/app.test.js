import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../app/app';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Jim Beam`,
    }],
  },
];

it(`App correctly renders after relaunch`, () => {
  const store = mockStore({mistakes: 0});
  const tree = renderer.create(
      <Provider store={store}>
        <App
          gameTime={0}
          maxMistakes={0}
          step={-1}
          questions={questions}
          onUserAnswer={()=>{}}
          onWelcomeButtonClick={() => {}}
        />
      </Provider>, {createNodeMock: () => {
        return {};
      }}).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Render GenreQuestionScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            gameTime={0}
            maxMistakes={0}
            step={0}
            questions={questions}
            onUserAnswer={()=>{}}
            onWelcomeButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
