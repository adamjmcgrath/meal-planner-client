import { createClient } from 'urql';

import { selectAuthToken } from '../redux/userSlice';

const client = createClient({ url: `${process.env.GATSBY_MEAL_PLANNER_API_BASE_URL}/graphql` });

export default client;

export const getFetchOptions = (state) => ({
    headers: { authorization: `Bearer ${selectAuthToken(state)}` }
});
