import Head from 'next/head';
import React, { Component, Fragment } from 'react';
import About from '../../components/about/About';
class Index extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Head>
                    <title>درباره اداک</title>
                </Head>
                <About/>
            </Fragment>
        );
    }
}

export default Index;