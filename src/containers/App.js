import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import FilterBar from '../components/FilterBar';
import RecipeList from '../components/RecipeList';
import {recipes} from '../recipes';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>CookingBook</h1>
          
          <SearchBox searchChange={this.onSearchChange}/>

          <div className="container">
            <div className="row">
              <div className="col-2">
              <FilterBar/>
              </div>
              <div className="col-10">
              <Scroll>
                <RecipeList recipes={recipes}/>
                <CardList robots={filteredRobots} />
              </Scroll>
              </div>

            </div>
          </div>

          
        </div>
      );
  }
}

export default App;