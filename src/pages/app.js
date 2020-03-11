import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../app/components/PrivateRoute';
import App from '../app/components/App';
import Auth0Callback from '../app/components/Auth0Callback';

const AppPage = () => (
    <Router>
        <PrivateRoute path="/app" component={App} default />
        <Auth0Callback path="/app/auth0/:auth0Action" />
    </Router>
);

export default AppPage;
