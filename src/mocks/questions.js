const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/2/26/After_You%27ve_Gone_-_U.S._Coast_Guard_Band.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/18/Evan_Schaeffer_-_09_-_Around_the_Bend.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/a/a9/Mercury_and_the_Architects_-_05_-_The_Architect.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/9/9e/Nangdo_-_Cry.ogg`,
        genre: `rock`,
      },
    ]
  },
  {
    type: `artist`,
    song: {
      src: `https://upload.wikimedia.org/wikipedia/commons/a/a1/Audionautix_-_Alison.oga`,
      artist: `Jim Beam`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jhony Walker`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      },
    ]
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/2/26/After_You%27ve_Gone_-_U.S._Coast_Guard_Band.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/18/Evan_Schaeffer_-_09_-_Around_the_Bend.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/a/a9/Mercury_and_the_Architects_-_05_-_The_Architect.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/9/9e/Nangdo_-_Cry.ogg`,
        genre: `rock`,
      },
    ]
  },
  {
    type: `artist`,
    song: {
      src: `https://upload.wikimedia.org/wikipedia/commons/a/a1/Audionautix_-_Alison.oga`,
      artist: `Jim Beam`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jhony Walker`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      },
    ]
  }
];
