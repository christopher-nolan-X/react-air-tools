import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Climate from './ClimateComponent';
import Workload from './WorkloadComponent';
import { Switch, Route } from 'react-router-dom';
import { PROJECTS } from '../shared/projects';
import { TOOLS } from '../shared/tools';
import { WEATHERSTATIONS } from '../shared/weatherstations';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      tools: TOOLS,
      weatherstations: WEATHERSTATIONS
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
            tools={this.state.tools}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/home' render={() => <HomePage tools={this.state.tools} />} />
        </Switch>
      </div>
    )
  }

}

export default Main;