import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes';

it(`Mistakes renders correctly`, () => {
  const tree = renderer.create(<Mistakes count={3}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
