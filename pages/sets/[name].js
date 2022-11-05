import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sets from '../../components/sets/Sets';



const Index = () => {
    const router = useRouter()
    const { name } = router.query;
    console.log(name);

    return (
        <Fragment>
            <Head>
                <title>{name}</title>
            </Head>
            <Sets title={name}/>
        </Fragment>
    );
}

export default Index;