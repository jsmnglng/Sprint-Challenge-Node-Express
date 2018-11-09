import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const Project = props => {
  const { name, description } = props.project;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <hr />
    </div>
  );
}

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
    const { projects } = this.state;
    const project = projects.map(project => {
      return (
        <Project project={project} />
      );
    });

    return (
      <div className="App">
        {project}
      </div>
    );
  }
}

export default App;
