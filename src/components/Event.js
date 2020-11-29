import React, { useState, useEffect } from "react";
import { eventData } from "./EventData";

function Event({ color }) {
  const [events, setEvets] = useState([]);

  useEffect(() => {
    setEvets(eventData);
  }, []);
  return (
    <>
      {events.map((event) => (
        <div className="event-container">
          <h1 className='event-date'>{event.date} </h1>

          <div className='title-description'>
            <h2 className='event-title'>{event.title}</h2>
            <p className='event-description'>{event.description} </p>
            <p className='event-details'>+ Event Details</p>
          </div>
          <div className='time-location'>
            <h3 className='event-time'>{event.time} </h3>
            <p className='event-location'>{event.location} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Event;
