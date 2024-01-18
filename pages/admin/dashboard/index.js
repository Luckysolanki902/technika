// AdminDashboard.js

import React from 'react';
import styles from './AdminDashboard.module.css';
import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.technika}>Technika HBTU</h1>
            <div className={styles.container}>
                <h1 className={styles.heading}>Greetings, Admin</h1>
                <p className={styles.description}>Begin managing the content seamlessly</p>
                <h3 className={styles.subheading} style={{ color: 'white', fontFamily: 'Jost' }}>Events</h3>
                <div className={styles.buttons}>
                    <Link href="/admin/add-event" className={styles.button}>
                        Add Event
                    </Link>
                    <Link href="/admin/delete-event" className={styles.button}>
                        Delete Event
                    </Link>
                    <Link href="/admin/edit-events" className={styles.button}>
                        Edit Events
                    </Link>
                </div>
                <h3 className={styles.subheading} style={{ color: 'white', fontFamily: 'Jost' }}>Event Details and Guidelines</h3>
                <div className={styles.buttons}>
                    <Link href="/admin/add-event-details" className={styles.button}>
                        Add Details
                    </Link>
                </div>
                <h3 className={styles.subheading} style={{ color: 'white', fontFamily: 'Jost' }}>Team</h3>
                <div className={styles.buttons}>
                    <Link href="/admin/add-team-member" className={styles.button}>
                        Add A Team Member
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
