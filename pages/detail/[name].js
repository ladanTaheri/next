
import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Detail from '../../components/blog/Detail';

const Index = () => {
    const router = useRouter()
    const { name } = router.query;
    console.log(name);

    return (
        <Fragment>
            <Head>
                <title>{name}</title>
            </Head>
            <Detail title={name}/>  
        </Fragment>
    );
}

export default Index;
