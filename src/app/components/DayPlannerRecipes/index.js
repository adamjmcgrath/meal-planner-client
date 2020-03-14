import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectRecipesFactory } from '../../redux/scheduledRecipesSlice';
import { NOT_FETCHED } from '../../../util/constants';

const DayPlannerRecipes = ({ moment }) => {
    const selectRecipes = useMemo(selectRecipesFactory, []);

    const recipes = useSelector((state) => selectRecipes(state, moment.format('YYYY-MM-DD')));

    if (recipes === NOT_FETCHED) {
        return <p>Loading...</p>;
    }

    if (recipes.length === 0) {
        return 'No Recipes!';
    }

    const items = recipes.map((recipe, idx) => <li key={idx}>{recipe.name}</li>);

    return <ul>{items}</ul>;
};

export default DayPlannerRecipes;
