
import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DesktopCalendar from './../../components/product/desktopcalendar/desktopCalendar';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    return (
        <Fragment>
            <Head>
                <title>{id}</title>
            </Head>
            <DesktopCalendar id={id}/>  
        </Fragment>
    );
}

export default Index;