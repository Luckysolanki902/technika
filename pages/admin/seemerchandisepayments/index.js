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
import * as XLSX from 'xlsx';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';


const API_ENDPOINT = '/api/getmerchandisepayments';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const RegistrationPage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [filteredRegistrations, setFilteredRegistrations] = useState([]);
    const [itemFilter, setItemFilter] = useState('');
    const [searchField, setSearchField] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(20);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [searchFieldOption, setSearchFieldOption] = useState('fullname');
    const [tshirtMode, setTshirtMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRegistrations = async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            setRegistrations(data.events);
            setFilteredRegistrations(data.events);
        } catch (error) {
            console.error('Error fetching registrations:', error);
        }finally {
            setIsLoading(false); // Set loading to false when fetching is complete
        }
    };

    const handleItemFilterChange = (event) => {
        const itemValue = event.target.value;
        setItemFilter(itemValue);
        filterByItem(itemValue);
    };

    const handleSearchInputChange = (event) => {
        const searchValue = event.target.value;
        setSearchField(event.target.value);
        setSearchQuery(searchValue);
        filterBySearchField(itemFilter, searchFieldOption, searchValue);
    };

    const filterByItem = (itemFilterValue) => {
        let filtered = registrations;
        if (itemFilterValue) {
            filtered = registrations.filter((reg) => reg.item === itemFilterValue);
        }
        setFilteredRegistrations(filtered || []);
        setCurrentPage(1);
    };

    useEffect(() => {
        if (tshirtMode) {
            let filtered = registrations.filter((reg) => reg.item.toLowerCase().startsWith('tshirt'));
            setFilteredRegistrations(filtered || []);
            setCurrentPage(1);
        } else {
            // If T-shirt mode is off, reset to the original registrations
            setFilteredRegistrations(registrations);
            setCurrentPage(1);
        }
        setSearchQuery('')
        setItemFilter('')
        setSearchField('')
    }, [tshirtMode])

    const handleSearchFieldOptionChange = (event) => {
        setSearchFieldOption(event.target.value);
        filterBySearchField(itemFilter, event.target.value, searchQuery);
    };

    const filterBySearchField = (itemFilterValue, searchFieldOptionValue, searchQueryValue) => {
        let filtered = registrations;
        if (itemFilterValue) {
            filtered = filtered.filter((reg) => reg.item === itemFilterValue);
        }
        if (searchQueryValue && filtered) {
            const normalizedSearchQuery = searchQueryValue.toLowerCase();
            filtered = filtered.filter((reg) => {
                const fieldValue = reg[searchFieldOptionValue].toLowerCase();
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
    const exportToExcel = () => {
        const formattedData = filteredRegistrations.map(({ _id, __v, imageUrl, createdAt, updatedAt, ...rest }) => ({
            ...rest,
            Date: new Date(createdAt).toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                weekday: 'long', // Display day name (e.g., Monday)
                year: 'numeric',
                month: 'long', // Display month name (e.g., February)
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true, // Use 12-hour clock with AM/PM
            }),
        }));

        const ws = XLSX.utils.json_to_sheet(formattedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'merchandisePayments');
        XLSX.writeFile(wb, 'merchandisepayments.xlsx');
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container style={{ minHeight: '100vh', maxWidth:'100vw' }}>
                <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>
                    Merchandise Payments

                </h1>


                <div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: 'auto', alignItems: 'center' }}>
                        <Switch
                            checked={tshirtMode}
                            onChange={() => { setTshirtMode(!tshirtMode) }}
                            color="primary"
                        />
                        <span style={{ marginRight: '1rem' }}>T-shirt Mode</span>

                        <TextField
                            select
                            label="Filter by Items"
                            value={itemFilter}
                            onChange={handleItemFilterChange}
                            fullWidth
                        >
                            <MenuItem value="">All Items</MenuItem>
                            {registrations && registrations.length > 0 && Array.from(
                                new Set(registrations.map((reg) => reg.item))
                            ).map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
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
                            style={{ marginRight: '2rem', marginBottom: '1rem' }}
                        >
                            <MenuItem value="year">Year</MenuItem>
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
                                <TableCell>Year</TableCell>
                                <TableCell>Gender</TableCell>
                                {tshirtMode && (
                                    <>
                                        <TableCell>Size</TableCell>
                                        <TableCell>NameonTshirt</TableCell>
                                        <TableCell>Coupon</TableCell>
                                        <TableCell>Variant</TableCell>
                                    </>
                                )}
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
                                        <TableCell>{registration.year}</TableCell>
                                        <TableCell>{registration.gender}</TableCell>
                                        {tshirtMode && (
                                            <>
                                                <TableCell>{registration.size}</TableCell>
                                                <TableCell>{registration.nameOnTshirt}</TableCell>
                                                <TableCell style={{textAlign:'center'}}>{registration.couponCode ? registration.couponCode :'-'}</TableCell>
                                                <TableCell>{registration.tshirtVariant}</TableCell>
                                            </>
                                        )}
                                        <TableCell>
                                            <div style={{ color: 'skyblue', cursor: 'default' }}

                                                onClick={() => handleImageClick(registration.imageUrl)}
                                            >
                                                Show Payment Receipt
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {filteredRegistrations.length === 0 && !isLoading && <div style={{ textAlign: 'center', marginTop: "1rem" }}>No Purchase</div>}
                {isLoading && <div style={{ textAlign: 'center', marginTop: "1rem" }}>Loading Data</div>}
                <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" onClick={exportToExcel}>
                        Export to Excel
                    </Button>
                </div>
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
