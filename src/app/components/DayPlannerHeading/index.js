import React from 'react';

const DayPlannerHeading = ({ moment }) => <h3>{moment.format('dddd, MMMM Do YYYY')}</h3>;

export default DayPlannerHeading;
