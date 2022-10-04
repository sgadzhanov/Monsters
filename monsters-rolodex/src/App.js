import { Component } from 'react'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return {
          monsters: users.map(u => {
            return {
              name: u.name,
              id: u.id
            }
          })
        }
      },
        () => console.log(this.state.monsters)
      ))
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.monsters.map(m => <h1 key={m.id}>{m.name}</h1>)}
        </div>
      </div>
    );
  }
}

export default App;
