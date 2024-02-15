// pages/event/[item].js
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import FormTab from '@/components/FormTab';
import MerchandiseForm from '@/components/MerchandiseForm';

const EventDetailsPage = () => {
    const router = useRouter();
    const { item } = router.query;
    console.log('item', item);

    return (
        <>
            <Head>
                <title>Buy {item}</title>
            </Head>
            <div>
                {item && <MerchandiseForm item={item} />}
            </div>
        </>
    );
};

export default EventDetailsPage;
