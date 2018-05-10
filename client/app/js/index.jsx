import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, IndexRoute, Route, Link, Prompt, Switch} from 'react-router-dom'
import ErrorBoundary from './errorboundary';
import LoginPage from './login';
import NoMatch from './nomatch'

ReactDOM.render(
	<ErrorBoundary>
	  <Router>
	  		<Switch>
			    <Route exact path="/" component={LoginPage}/>
			    <Route component={NoMatch}/>
		    </Switch>
	  </Router>
  </ErrorBoundary>, document.getElementById('app'))