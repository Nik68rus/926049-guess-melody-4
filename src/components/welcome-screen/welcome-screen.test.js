import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen';

it(`Welcome screen correctly renders after relaunch`, () => {
  const tree = renderer.create(<WelcomeScreen time={0} errorCount={0} onStartCLick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
