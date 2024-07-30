import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const defaultTheme = createTheme();

const  Orders2 = (props) => {
    const [eventname, seteventName] = useState("");
    const [locationname, setlocationName] = useState("");
    const [date, setDate] = useState("");
    const [creatorname, setcreatorName] = useState("");
    const { id } = useParams()
    // const { user, SetUser } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/event/'+id)
        .then((res) => {
            seteventName(res.data.event.eventname)
            setlocationName(res.data.event.locationname)
            setDate(res.data.event.date)
            setcreatorName(res.data.event.creatorname)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/event/edit/' + id, {
            eventname,
            locationname,
            date,
            creatorname,
        })
            .then(res => {
            // Handle the response
            console.log(res);
            seteventName("");
            setlocationName("");
            setDate("");
            setcreatorName("");
            navigate("/Dashboard")
        })
            .catch(error => {
            // Handle the error
            console.log(error);
        });
    };
    
    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h5">
                Edit your  event
            </Typography>
            <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 0 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="eventname"
                label="Event Name"
                name="eventname"
                autoComplete="eventname"
                autoFocus
                onChange={(e) => seteventName(e.target.value)}
                value={eventname}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                id="location name"
                label="Location Name"
                name="location name"
                autoComplete="location name"
                autoFocus
                onChange={(e) => setlocationName(e.target.value)}
                value={locationname}
                />
                {/* <label>Date of Birth</label> */}
                <TextField
                margin="normal"
                required
                fullWidth
                id="date"
                type="date"
                label="Date"
                name="date"
                autoComplete="date"
                autoFocus
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="creator"
                label="creator"
                type="Creator"
                id="creator"
                autoComplete="creator"
                onChange={(e) => setcreatorName(e.target.value)}
                value={creatorname}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
    }

export default Orders2;