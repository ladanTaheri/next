import Head from 'next/head';
import React, { Component, Fragment } from 'react';
import Blog from '../../components/blog/Blog';
import Contact from '../../components/contact/Contact';
class Index extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Head>
                    <title>تماس</title>
                </Head>
                <Contact />
            </Fragment>
        );
    }
}

export default Index;