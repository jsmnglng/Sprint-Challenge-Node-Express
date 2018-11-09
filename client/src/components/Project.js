import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import Actions from './Actions';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log('id CDM', id)
    this.getDataActions(id);
  }

  getDataActions(id) {
    const url = 'http://localhost:9000/api/projects';

    axios.get(`http://localhost:9000/api/projects/${id}/actions`)
      .then(res => {
        console.log(res)
        this.setState({ actions: res.data })
      })
      .catch(err => console.log(err));
  }


  render() {
    console.log('actionsRender', this.state.actions)
    const { projects, match } = this.props;
    const project = projects.find(project => `${project.id}` === match.params.id)
    const { name, description } = project;

    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <Link to={`/${match.params.id}/actions`} onClick={() => this.getDataActions(project.id)}>actions</Link>
        <hr />

        <Route
          path={`/${match.params.id}/actions`}
          render={ownProps => <Actions {...ownProps} actions={this.state.actions} />}
        />
      </div>
    );
  }
}

export default Project;
