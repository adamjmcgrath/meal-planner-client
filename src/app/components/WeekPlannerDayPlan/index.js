import React from 'react';

import WeekPlannerDayPlanHeading from '../WeekPlannerDayPlanHeading';
import WeekPlannerDayPlanRecipes from '../WeekPlannerDayPlanRecipes';

const WeekPlannerDayPlan = ({ moment }) => (
    <div style={{ display: 'inline-block' }}>
        <WeekPlannerDayPlanHeading moment={moment} />
        <WeekPlannerDayPlanRecipes moment={moment} />
    </div>
);

export default WeekPlannerDayPlan;
