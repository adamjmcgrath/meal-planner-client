import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../src/app/redux/createStore';

const wrapWithReduxProvider = ({ element }) => {
    // Creating store in `wrapRootElement` handler ensures:
    //  - There is fresh store for each SSR page.
    //  - It will be called only once in the browser, when React mounts.
    const store = createStore();

    return <Provider store={store}>{element}</Provider>;
};

export default wrapWithReduxProvider;
