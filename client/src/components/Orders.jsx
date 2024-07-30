import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';

const  Orders = (props) => {
    const {event, setEvent} = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/event')
        .then((res) => {
            setEvent(res.data.allevents)
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <React.Fragment>
        <Title>Recent Orders</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Event Name</TableCell>
                <TableCell>Location Name</TableCell>
                <TableCell>Attendees</TableCell>
                <TableCell>Date</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
                event.map((event, index) => {
                    return(
                        <TableRow key={index}>
                            <TableCell>{event.eventname}</TableCell>
                            <TableCell>{event.locationname}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{moment(event.date).format('M/D/YYYY ')} {moment(event.createdAt).format('ha')}</TableCell>
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
        </React.Fragment>
    );
}

export default Orders;