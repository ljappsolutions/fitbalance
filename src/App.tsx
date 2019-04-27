import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import config from './aws-exports';
import Router from './Router';

Amplify.configure(config);

interface IAppProps extends RouteComponentProps {
  authState: string;
  authData: any;
  onStateChange: any;
}

class App extends Component<IAppProps> {
  render() {
    return (
      <div className="App">
        <Router location={this.props.location} authState={this.props.authState}
          authData={this.props.authData} />
      </div>
    );
  }
}

export default withAuthenticator(withRouter(App), true)
