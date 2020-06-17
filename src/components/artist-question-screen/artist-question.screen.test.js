import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

const question = {
  type: `artist`,
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/a/a1/Audionautix_-_Alison.oga`,
    artist: `Jim Beam`
  },
  answers: [
    {
      picture: `path`,
      artist: `Jhony Walker`,
    },
    {
      picture: `path`,
      artist: `Jack Daniels`,
    },
    {
      picture: `path`,
      artist: `Jim Beam`,
    },
  ]
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        onAnswer = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
