import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('should return correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
  });

it('should return correct score', () => {
    const playerScorePassed = 5;
    const playerComponent = shallow(<Player score={playerScorePassed} />);
  
    const playerScoreRendered = playerComponent.find('.Player__score').text();
  
    expect(Number(playerScoreRendered)).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const plusButton = playerComponent.find('.Player__button_add');
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const plusButton = playerComponent.find('.Player__button_substract');
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove when button is clicked', () => {
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
  
    const button = playerComponent.find('.Player__button_delete');
  
    button.simulate('click');
  
    expect(mockedOnPlayerRemove).toBeCalledWith();
});
