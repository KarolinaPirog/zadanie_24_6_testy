import PlayerList from './PlayerList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayerList players={[]} />)
});

it('should return 2 players', () => {
  const players = [
      {
          name: 'Kunegunda',
          score: 5
      },
      {
          name: 'Antoś',
          score: 0
      }
  ]
  const playerComponent = shallow(<PlayerList players={players} />);

  const expectedPlayersNumber = playerComponent.find(Player).length;
  expect(expectedPlayersNumber).toEqual(2);
});

it('should call onPlayerScoreChange', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayerList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);
    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});

it('should call onPlayerRemove', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<PlayerList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
    onPlayerRemove(0);
    expect(mockedOnPlayerRemove).toBeCalledWith(0);
});
