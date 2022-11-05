import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Pen from '../../components/product/pen/Pen';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    return (
        <Fragment>
            <Head>
                <title>{id}</title>
            </Head>
            <Pen id={id}/>  
        </Fragment>
    );
}

export default Index;