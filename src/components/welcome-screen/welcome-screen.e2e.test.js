import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`WelcomeScreen component`, () => {
  it(`Should welcome button be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();
    const welcomeScreen = shallow(
        <WelcomeScreen
          time={1}
          errorCount={1}
          onStartClick={onWelcomeButtonClick}
        />
    );

    const startButton = welcomeScreen.find(`button.welcome__button`);
    startButton.simulate(`click`);
    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
}
);
