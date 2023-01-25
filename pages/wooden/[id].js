
import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Wooden from './../../components/product/wooden/wooden';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    return (
        <Fragment>
            <Head>
                <title>{id}</title>
            </Head>
            <Wooden id={id}/>  
        </Fragment>
    );
}

export default Index;