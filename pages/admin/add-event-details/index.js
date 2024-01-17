// pages/index.js
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField, Container, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './eventdetails.module.css'; // Import the CSS module

const IndexPage = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');
    const linkPath = (name) => {
        return `/admin/add-event-details/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'))}`;
    };

    useEffect(() => {
        // Fetch data on component mount
        const fetchData = async () => {
            const res = await fetch('/api/get-events');
            const data = await res.json();
            setEvents(data.events);
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        setSelectedEvent(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <h2 className={styles.heading}>Choose an event to edit</h2>
                {events.map((event) => (
                    <Link className={styles.eventLink} href={linkPath(event.name)} key={event.id} passHref>
                       {event.name.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IndexPage;
