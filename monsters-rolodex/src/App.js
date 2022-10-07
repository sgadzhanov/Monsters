import { Component } from 'react'
import './App.css';
import './components/card-list/card-list.component'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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

  onSearchChange = event => {
    const filter = event.target.value.toLowerCase();
    this.setState(() => {
      return { filter }
    })
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter(m => {
      const [firstName, lastName] = m.name.split(' ');

      return firstName.toLowerCase().startsWith(this.state.filter)
        || lastName.toLowerCase().startsWith(this.state.filter);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder='search monster user'
          className='monsters-search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
