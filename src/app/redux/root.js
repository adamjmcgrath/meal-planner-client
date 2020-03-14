import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';

import { userReducer, userEpic } from './userSlice';
import { scheduledRecipesReducer, scheduledRecipesEpic } from './scheduledRecipesSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    scheduledRecipes: scheduledRecipesReducer
});

export const rootEpic = combineEpics(userEpic, scheduledRecipesEpic);
