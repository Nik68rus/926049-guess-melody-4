import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/a/a1/Audionautix_-_Alison.oga`
  }
};

const children = <div />;

it(`AudioPlayer rendered correctly`, () => {
  const {song} = mock;
  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    isLoading={true}
    src={song.src}
    onPlayButtonClick={()=>{}}>
    {children}
  </AudioPlayer>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
