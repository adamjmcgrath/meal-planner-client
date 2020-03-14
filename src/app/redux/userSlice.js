import { createSlice, createSelector } from '@reduxjs/toolkit';
import { from, of } from 'rxjs';
import { exhaustMap, mergeMap, map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import _keyBy from 'lodash/keyBy';
import _get from 'lodash/get';

import { fetchSession } from '../../util/Auth0';
import { NOT_FETCHED } from '../../util/constants';
import UrqlClient from '../util/urqlClient';

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

const teamQuery = `
  query fetchTeams {
    teams {
      id
      name
    }
  }
`;

const fetchUserEpic = (action$) =>
    action$.pipe(
        ofType(fetchUser.type),
        exhaustMap(() =>
            from(fetchSession()).pipe(
                mergeMap((session) => {
                    if (session === null) {
                        return of(null);
                    }

                    return from(
                        UrqlClient.query(teamQuery, undefined, {
                            fetchOptions: {
                                headers: { authorization: `Bearer ${session.accessToken}` }
                            }
                        }).toPromise()
                    ).pipe(map((response) => ({ session, teams: response.data.teams })));
                }),
                map((payload) => fetchUserFulfilled(payload))
            )
        )
    );

export const userEpic = combineEpics(fetchUserEpic);

export const selectUser = (state) => state.user;

export const selectAuthToken = createSelector(selectUser, (user) =>
    _get(user, ['session', 'accessToken'], '')
);

export const selectTeam = createSelector(selectUser, (user) => {
    const id = _get(user, ['teams', 'activeTeamId']);

    return id !== undefined ? user.teams.indexedById[id] : null;
});
