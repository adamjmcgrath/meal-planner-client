import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { NOT_FETCHED } from './constants';
import { fetchUser } from '../app/redux/userSlice';

export const useUser = () => {
    const user = useSelector((state) => state.user, shallowEqual);

    const dispatch = useDispatch();

    if (user === NOT_FETCHED) {
        dispatch(fetchUser());
    }

    return user;
};
