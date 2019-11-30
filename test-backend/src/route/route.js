import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { routeCodes } from './routeConfig';

import success from 'view/success';

export default class Routes extends Component {
  render(){
    return(
      <Router history={ browserHistory }>
          <Route path={ routeCodes.RESPONSE } component={ success }></Route>
      </Router>
    );
  }
}