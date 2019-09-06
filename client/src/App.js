import React from 'react';
import './App.css';
import axios from 'axios';

//components
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({players: res.data})
        console.log(res)
      })
      .catch(err => console.log('Error, please try again', err))
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        {this.state.players.map(player => (
          <PlayerCard player={player} />
        ))}
      </div>
    )
  }
}

export default App;
