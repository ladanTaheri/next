import Head from 'next/head';
import React, { Component, Fragment } from 'react';
import Blog from '../../components/blog/Blog';
class Index extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Head>
                    <title>بلاگ</title>
                </Head>
                <Blog />
            </Fragment>
        );
    }
}

export default Index;