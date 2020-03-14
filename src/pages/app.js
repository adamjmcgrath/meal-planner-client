import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../app/components/PrivateRoute';
import App from '../app/components/App';
import DayPlanner from '../app/components/DayPlanner';
import RecipeImporter from '../app/components/RecipeImporter';
import Auth0Callback from '../app/components/Auth0Callback';

const AppPage = () => (
    <Router>
        <PrivateRoute path="/app" component={App} default />
        <PrivateRoute path="/app/dayPlanner/:dateString" component={DayPlanner} />
        <PrivateRoute path="/app/import" component={RecipeImporter} />
        <Auth0Callback path="/app/auth0/:auth0Action" />
    </Router>
);

export default AppPage;
