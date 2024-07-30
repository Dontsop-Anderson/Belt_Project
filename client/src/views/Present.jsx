import React from 'react';
import Dashboard from '../components/Dashboard';
import { useState } from 'react';

const Present = () => {
  const [event, setEvent] = useState([]);

  return (
    <div>
        <Dashboard event={event} setEvent={setEvent} />
    </div>
  );
};

export default Present;
