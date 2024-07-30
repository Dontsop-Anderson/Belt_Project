import React from 'react'
import Search from '../pages3/Search'
import { useState } from 'react';

const Now = () => {
  const [event, setEvent] = useState([]);

  return (
    <div>
        <Search event={event} setEvent={setEvent}/>
    </div>
  )
}

export default Now