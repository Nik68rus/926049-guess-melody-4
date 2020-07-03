import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game-screen';
import {GameType} from '../../const';
const children = <div />;

describe(`GameScreen renders correctly`, () => {
  it(`with type ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
          mistakes={0}
        >
          {children}
        </GameScreen>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with type GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
          mistakes={0}
        >
          {children}
        </GameScreen>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

