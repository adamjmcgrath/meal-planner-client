import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';

import { userReducer, userEpic } from './userSlice';

export const rootReducer = combineReducers({
    user: userReducer
});

export const rootEpic = combineEpics(userEpic);
