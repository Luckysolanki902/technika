import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const API_ENDPOINT = '/api/getmerchandisepayments';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const RegistrationPage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [filteredRegistrations, setFilteredRegistrations] = useState([]);
    const [eventFilter, setEventFilter] = useState('');
    const [searchField, setSearchField] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [searchFieldOption, setSearchFieldOption] = useState('fullname');

    const handleSearchFieldOptionChange = (event) => {
        setSearchFieldOption(event.target.value);
    };

    const fetchRegistrations = async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            setRegistrations(data.events);
            setFilteredRegistrations(data.events);
        } catch (error) {
            console.error('Error fetching registrations:', error);
        }
    };

    const handleEventFilterChange = (event) => {
        setEventFilter(event.target.value);
        filterRegistrations(event.target.value, searchQuery);
    };

    const handleSearchInputChange = (event) => {
        setSearchField(event.target.value);
        setSearchQuery(event.target.value);
        filterRegistrations(eventFilter, event.target.value);
    };

    const filterRegistrations = (eventFilter, searchQuery) => {
        let filtered = registrations;

        if (eventFilter) {
            filtered = filtered.filter((reg) => reg.eventName === eventFilter);
        }

        if (searchQuery && filtered) {
            const normalizedSearchQuery = searchQuery.toLowerCase();

            filtered = filtered.filter((reg) => {
                const fieldValue = reg[searchFieldOption].toLowerCase();
                return fieldValue.includes(normalizedSearchQuery);
            });
        }

        setFilteredRegistrations(filtered || []);
        setCurrentPage(1);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        fetchRegistrations();
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container style={{ minHeight: '100vh' }}>
                <Typography variant="h2" gutterBottom style={{ textAlign: 'center' }}>
                    Event Registrations
                </Typography>

                <div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 30% 2rem 30%', height: 'auto' }}>

                        <TextField
                            select
                            label="Filter by Event"
                            value={eventFilter}
                            onChange={handleEventFilterChange}
                            fullWidth
                        >
                            <MenuItem value="">All Events</MenuItem>
                            {registrations && registrations.length > 0 && Array.from(
                                new Set(registrations.map((reg) => reg.eventName))
                            ).map((eventName) => (
                                <MenuItem key={eventName} value={eventName}>
                                    {eventName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>

                        <TextField
                            select
                            label="Search Field"
                            value={searchFieldOption}
                            onChange={handleSearchFieldOptionChange}
                            style={{ marginRight: '2rem' }}
                        >
                            <MenuItem value="item">Item</MenuItem>
                            <MenuItem value="fullname">Full Name</MenuItem>
                            <MenuItem value="email">Email</MenuItem>
                            <MenuItem value="branch">Branch</MenuItem>
                            <MenuItem value="gender">Gender</MenuItem>
                        </TextField>

                        <TextField
                            label={`Search by ${searchFieldOption}`}
                            variant="outlined"
                            value={searchField}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                </div>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell>College</TableCell>
                                <TableCell>Fullname</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Branch</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Payment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRegistrations?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                                .map((registration) => (
                                    <TableRow key={registration._id}>
                                        <TableCell>{registration.item}</TableCell>
                                        <TableCell>{registration.college}</TableCell>
                                        <TableCell>{registration.fullname}</TableCell>
                                        <TableCell>{registration.email}</TableCell>
                                        <TableCell>{registration.branch}</TableCell>
                                        <TableCell>{registration.gender}</TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() => handleImageClick(registration.imageUrl)}
                                            >
                                                Show Payment Receipt
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Pagination
                    count={Math.ceil(filteredRegistrations?.length / pageSize)}
                    page={currentPage}
                    onChange={handlePageChange}
                    style={{ margin: '20px 0' }}
                />

                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogContent>
                        <img
                            src={selectedImage}
                            alt="Payment Receipt"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </DialogContent>
                </Dialog>
            </Container>
        </ThemeProvider>
    );
};

export default RegistrationPage;
