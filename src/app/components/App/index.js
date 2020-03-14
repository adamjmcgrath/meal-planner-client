import React from 'react';
import { Link } from 'gatsby';

import WeekPlanner from '../WeekPlanner';
import { logOut } from '../../../util/Auth0';

const App = ({ user }) => {
    const team = user.teams.indexedById[user.teams.activeTeamId];

    return (
        <>
            <h1>Team {team.name}!</h1>
            <h2>Hi {user.name.split(' ')[0]}!</h2>
            <button onClick={() => logOut()}>Log Out</button>
            <Link to="/">Home</Link>
            <WeekPlanner />
        </>
    );
};

export default App;
