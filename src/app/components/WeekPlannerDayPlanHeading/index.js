import React from 'react';
import { Link } from 'gatsby';

const WeekPlannerDayPlanHeading = ({ moment }) => (
    <h3>
        <Link to={`/app/dayPlanner/${moment.format('YYYY-MM-DD')}`}>{moment.format('ddd D')}</Link>
    </h3>
);

export default WeekPlannerDayPlanHeading;
