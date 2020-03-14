import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NOT_FETCHED } from './constants';
import { fetchUser, selectUser } from '../app/redux/userSlice';

export const useUser = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user === NOT_FETCHED) {
            dispatch(fetchUser());
        }
    }, [user]);

    return user;
};
