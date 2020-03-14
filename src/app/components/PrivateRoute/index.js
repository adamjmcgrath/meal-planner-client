import React from 'react';
import { Redirect } from '@reach/router';

import { useUser } from '../../../util/customHooks';
import { NOT_FETCHED } from '../../../util/constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useUser();

    if (user === NOT_FETCHED) {
        // TODO: Use loading component.
        return <p>Loading...</p>;
    }

    // If the user is NOT logged in, then redirect to the index page.
    if (user === null) {
        return <Redirect to="/" noThrow />;
    }

    return <Component user={user} {...rest} />;
};

export default PrivateRoute;
