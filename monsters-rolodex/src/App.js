import { Component } from 'react'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filter: ''
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }));
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter(m => {
      const [firstName, lastName] = m.name.split(' ');

      return firstName.toLowerCase().startsWith(this.state.filter) || lastName.toLowerCase().startsWith(this.state.filter)
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={event => {
            const filter = event.target.value.toLowerCase();
            this.setState(() => {
              return { filter }
            })
          }}
        />
        <div>
          {filteredMonsters.map(m => <h1 key={m.id}>{m.name}</h1>)}
        </div>
      </div>
    );
  }
}

export default App;
