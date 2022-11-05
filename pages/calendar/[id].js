import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Calendar from '../../components/product/calendar/calendar';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    return (
        <Fragment>
            <Head>
                <title>{id}</title>
            </Head>
            <Calendar id={id}/>  
        </Fragment>
    );
}

export default Index;