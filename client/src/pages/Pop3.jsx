import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function BasicPopover3() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const { id: eventId } = useParams();
    const [data, setData] = useState({});
    const {eventname, creatorname} = data;
    useEffect(() => {
        axios.get('http://localhost:8000/api/event/' + eventId)
        .then((res) => {
            setData(res.data.event)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [eventId])

    return (
        <div>
        <Button sx={{ width: "38.5%" }} aria-describedby={id} variant="contained" onClick={handleClick}>
            User
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <Typography sx={{ p: 2 }}>
                <p>Title: {eventname}</p>
                <p>User: {creatorname}</p>
                <p>Total User: </p>
            </Typography>
        </Popover>
        </div>
    );
}
