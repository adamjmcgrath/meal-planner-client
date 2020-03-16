import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { logIn, logOut } from '../util/Auth0';

import { useUser } from '../util/customHooks';
import { NOT_FETCHED } from '../util/constants';

const IndexPage = () => {
    const user = useUser();

    let button;

    if (user === NOT_FETCHED) {
        button = null;
    } else if (user === null) {
        button = (
            <button type="button" onClick={() => logIn()}>
                {' '}
                Log In
            </button>
        );
    } else {
        button = (
            <button type="button" onClick={() => logOut()}>
                Log Out
            </button>
        );
    }

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people.</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            {button} <Link to="/app">Go to App</Link>
        </Layout>
    );
};

export default IndexPage;
