import React, { useEffect } from 'react';
import Moment from 'moment';
import { Redirect } from '@reach/router';
import { useDispatch } from 'react-redux';

import DayPlannerHeading from '../DayPlannerHeading';
import DayPlannerRecipes from '../DayPlannerRecipes';
import { fetchScheduledRecipes } from '../../redux/scheduledRecipesSlice';

const DayPlanner = ({ dateString }) => {
    const dispatch = useDispatch();

    const moment = Moment(dateString, 'YYYY-MM-DD');

    useEffect(() => {
        if (!moment.isValid()) {
            return;
        }

        // Fetch the recipes for this day.
        dispatch(fetchScheduledRecipes({ dateStrings: [dateString] }));
    }, [moment]);

    if (!moment.isValid()) {
        return <Redirect to="/app" noThrow />;
    }

    return (
        <>
            <DayPlannerHeading moment={moment} />
            <DayPlannerRecipes moment={moment} />
        </>
    );
};

export default DayPlanner;
