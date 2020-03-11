import { createSlice } from '@reduxjs/toolkit';
import { from } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import _keyBy from 'lodash/keyBy';

import { fetchSession } from '../../util/Auth0';
import { NOT_FETCHED } from '../../util/constants';

const { reducer, actions } = createSlice({
    name: 'user',
    initialState: NOT_FETCHED,
    reducers: {
        fetchUser: (state) => state,
        fetchUserFulfilled: (state, action) => {
            if (action.payload === null) {
                return null;
            }

            const { session, teams } = action.payload;

            const { sub: id, name, email } = session.idTokenPayload;

            return {
                id,
                name,
                email,
                session,
                teams: {
                    activeTeamId: teams[0].id,
                    indexedById: _keyBy(teams, 'id')
                }
            };
        }
    }
});

export const userReducer = reducer;

export const { fetchUser, fetchUserFulfilled } = actions;

const fetchTeamsForUser = () =>
    Promise.resolve([
        {
            id: 1,
            name: 'Noad-Affoo'
        }
    ]);

const fetchPayload = async () => {
    const session = await fetchSession();

    if (session === null) {
        return null;
    }

    const { accessToken } = session;

    const teams = await fetchTeamsForUser(accessToken);

    return { session, teams };
};

const fetchUserEpic = (action$) =>
    action$.pipe(
        ofType(fetchUser.type),
        exhaustMap(() => from(fetchPayload()).pipe(map((payload) => fetchUserFulfilled(payload))))
    );

export const userEpic = combineEpics(fetchUserEpic);
