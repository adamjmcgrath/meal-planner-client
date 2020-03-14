import React from 'react';

const WeekPlannerNav = ({ onClickPrevWeek, onClickThisWeek, onClickNextWeek }) => (
    <>
        <button type="button" onClick={onClickPrevWeek}>
            {'<'}
        </button>
        <button type="button" onClick={onClickThisWeek}>
            {'TODAY'}
        </button>
        <button type="button" onClick={onClickNextWeek}>
            {'>'}
        </button>
    </>
);

export default WeekPlannerNav;
