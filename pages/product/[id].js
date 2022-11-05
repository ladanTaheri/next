import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Product from '../../components/product/Product';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    return (
        <Fragment>
            <Head>
                <title>{id}</title>
            </Head>
            <Product id={id}/>  
        </Fragment>
    );
}

export default Index;