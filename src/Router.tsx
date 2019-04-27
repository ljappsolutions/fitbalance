import * as React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from 'react-router-auth';
import routes from './Routes';
import { SignIn } from './modules/auth/SignIn';
import { SignOut } from './modules/auth/SignOut';
import { Routine } from './modules/routine/Routine';
import Dashboard from './modules/dashboard/Dashboard';

interface IRouterProps {
    location: { pathname: string };
    authState: string;
    authData: any;
}

export default class Router extends React.Component<IRouterProps> {
    public render() {
        const isAuthenticated = this.props.authState === 'signedIn';

        return (
            <Switch>
                <AuthRoute exact={true} redirectTo={routes.root} path={routes.root} component={SignIn} authenticated={isAuthenticated} />
                <AuthRoute exact={false} redirectTo={routes.signin} path={routes.signin} component={SignIn} authenticated={isAuthenticated} />
                <AuthRoute exact={false} redirectTo={routes.signout} path={routes.signout} component={SignOut} authenticated={isAuthenticated} />
                <AuthRoute exact={false} redirectTo={routes.root} path={routes.routine} component={Routine} authenticated={isAuthenticated} />
                <AuthRoute exact={false} redirectTo={routes.root} path={routes.dashboard} component={Dashboard} authenticated={isAuthenticated} />
            </Switch>
        );
    }
}
