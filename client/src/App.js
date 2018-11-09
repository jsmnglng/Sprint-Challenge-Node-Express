import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Projects from './components/Projects';
import Project from './components/Project';
import Actions from './components/Actions';

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const url = 'http://localhost:9000/api/projects';

    axios.get(url)
      .then(res => {
        this.setState({ projects: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { projects, actions } = this.state;

    return (
      <div className="App">
        <Link exact to="/"><h1>Projects</h1></Link>
        <Route
          exact path="/"
          render={ownProps => <Projects {...ownProps} projects={projects} />}
        />
        <Route
          path="/:id"
          render={ownProps => <Project {...ownProps} projects={projects} />}
        />

      </div>
    );
  }
}

export default App;
