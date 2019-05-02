import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import config from './aws-exports';
import Router from './Router';
import { PositionProperty, TextAlignProperty } from 'csstype';
import {
  BrowserView,
} from "react-device-detect";
import { withStyles, WithStyles } from '@material-ui/core';

Amplify.configure(config);

const styles = {
  app: {
    position: 'relative' as PositionProperty,
    minHeight: '100vh',
  },
  footer: {
    padding: '5px 5px',
    textAlign: 'right' as TextAlignProperty
  }
}

interface IAppProps extends WithStyles, RouteComponentProps {
  authState: string;
  authData: any;
  onStateChange: any;
}

class App extends Component<IAppProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.app}>
          <BrowserView>
            <div style={{ textAlign: 'center' }}>
              <b>The content of this site is enhanced for
            a mobile experience.</b>
            </div>
          </BrowserView>
          <Router location={this.props.location} authState={this.props.authState}
            authData={this.props.authData} />
        </div>
        <footer className={classes.footer}>
          Powered by JDSanchez
        </footer>
      </>
    );
  }
}

export default withAuthenticator(withStyles(styles)(withRouter(App)), true)
