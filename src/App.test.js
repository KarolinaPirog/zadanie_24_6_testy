import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayerList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App players={[]} />);
  const players = [
      {
          name: 'Kunegunda',
          score: 1
      }
  ]
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayerList).prop('onScoreUpdate');
  onScoreUpdate(0, 1);
  const playersAfterUpdate = appComponent.state('players');
  var scoreAfterUpdate = playersAfterUpdate[0].score
  expect(scoreAfterUpdate).toEqual(2); 
});

it('should add new player', () => {
  const appComponent = shallow(<App />);
  const players = []
  appComponent.setState({ players });
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd("Zbyszek");
  const playersRetrieved = appComponent.state('players');
  expect(playersRetrieved.length).toEqual(1);
  expect(playersRetrieved[0].name).toEqual('Zbyszek');
  expect(playersRetrieved[0].score).toEqual(0);
});

it('should remove player', () => {
  const appComponent = shallow(<App players={[]} />);
  const players = [
      {
          name: 'Kunegunda',
          score: 1
      }
  ]
  appComponent.setState({ players });
  const onPlayerRemove = appComponent.find(PlayerList).prop('onPlayerRemove');
  onPlayerRemove(0);
  const playersAfterRemove = appComponent.state('players');
  expect(playersAfterRemove.length).toEqual(0); 
});