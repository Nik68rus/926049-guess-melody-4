import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions";

const Settings = {
  GAME_TIME: 5,
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      gameTime={Settings.GAME_TIME}
      errorCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);

