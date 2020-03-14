import React, { useReducer } from 'react';
import Moment from 'moment';

import WeekPlannerNav from '../WeekPlannerNav';
import WeekPlannerHeading from '../WeekPlannerHeading';
import WeekPlannerDayPlans from '../WeekPlannerDayPlans';

const reducer = (state, action) => {
    switch (action.type) {
        case 'goto/today':
            return Moment();

        case 'goto/prevWeek':
            return Moment(state).subtract(7, 'days');

        case 'goto/nextWeek':
            return Moment(state).add(7, 'days');

        default:
            return state;
    }
};

const WeekPlanner = () => {
    const [moment, dispatch] = useReducer(reducer, Moment());

    const handleClickPrevWeek = () => dispatch({ type: 'goto/prevWeek' });
    const handleClickThisWeek = () => dispatch({ type: 'goto/today' });
    const handleClickNextWeek = () => dispatch({ type: 'goto/nextWeek' });

    return (
        <div>
            <WeekPlannerNav
                onClickPrevWeek={handleClickPrevWeek}
                onClickThisWeek={handleClickThisWeek}
                onClickNextWeek={handleClickNextWeek}
            />
            <WeekPlannerHeading moment={moment} />
            <WeekPlannerDayPlans moment={moment} />
        </div>
    );
};

export default WeekPlanner;
