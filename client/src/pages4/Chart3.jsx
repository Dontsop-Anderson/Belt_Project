import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


// Generate Sales Data
    export default function Chart3() {
    const {id} = useParams()
    const [data, setData] = useState({});
    const {eventname, creatorname, email} = data;
    useEffect(() => {
        axios.get('http://localhost:8000/api/event/'+id)
        .then((res) => {
            setData(res.data.event)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])

    

    return (
        <React.Fragment>
        <div>
            <p>Name: {creatorname}</p>
            <p>Email: {email}</p><br />
            <p><Link to={`/event/edit/${id}`}>Edit</Link></p><br />
            <p>Event History: {eventname} </p><br />
            <p>Future:</p>
        </div>
        </React.Fragment>
    );
}