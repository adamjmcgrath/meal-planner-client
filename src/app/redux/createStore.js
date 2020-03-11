import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from './root';

const createStore = () => {
    const epicMiddleware = createEpicMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: [epicMiddleware]
    });

    epicMiddleware.run(rootEpic);

    return store;
};

export default createStore;
