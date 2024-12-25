import React from 'react';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      title: 'Ganesh Chaturthi Celebration',
      date: 'September 7, 2024',
      time: '9:00 AM - 12:00 PM',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Join us for a special puja and cultural program to celebrate the birthday of Lord Ganesha.',
      image: `${process.env.PUBLIC_URL}/image/img1.jpg`
    },
    {
      id: 2,
      title: 'Navratri Festival',
      date: 'October 3 - October 12, 2024',
      time: '6:00 PM onwards',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Nine nights of devotion, music, and dance in honor of the Divine Mother.',
      image: `${process.env.PUBLIC_URL}/image/img2.jpg`
    },
    {
      id: 3,
      title: 'Diwali Festival Celebration',
      date: 'November 3, 2024',
      time: '5:00 PM - 10:00 PM',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Join us for an evening of lights, fireworks, music, and delicious food as we celebrate the festival of Diwali.',
      image: `${process.env.PUBLIC_URL}/image/img3.jpg`
    },
    {
      id: 4,
      title: 'Sri Rama Navami Celebration',
      date: 'April 6, 2024',
      time: '9:00 AM - 1:00 PM',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Join us for special puja, bhajans, and discourse to celebrate the birth of Lord Rama.',
      image: `${process.env.PUBLIC_URL}/image/img4.jpg`
    },
    {
      id: 5,
      title: 'Sankatahara Chaturthi Vratham',
      date: 'June 15, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Observe the Sankatahara Chaturthi Vratham with rituals, prayers, and offerings to Lord Ganesha for removal of obstacles.',
      image: `${process.env.PUBLIC_URL}/image/img5.jpg`
    },
    {
      id: 6,
      title: 'Sri Krishna Janmashtami Celebration',
      date: 'August 26, 2024',
      time: '7:00 PM onwards',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Celebrate the birth of Lord Krishna with devotional songs, dance performances, and midnight arati.',
      image: `${process.env.PUBLIC_URL}/image/img6.jpg`
    },
    {
      id: 7,
      title: 'Hanuman Jayanti Celebration',
      date: 'April 23, 2024',
      time: '7:00 PM onwards',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Celebrate the birth of Lord Hanuman with devotional songs, dance performances, and special puja.',
      image: `${process.env.PUBLIC_URL}/image/img7.jpg`
    },
    {
      id: 8,
      title: 'Maha Shivaratri Celebration',
      date: 'March 8, 2024',
      time: '6:00 PM onwards',
      location: 'Sri Lakshmi Ganapathi Hanumatheesawara Temple',
      description: 'Celebrate Maha Shivaratri with night-long vigil, special puja, and devotional activities dedicated to Lord Shiva.',
      image: `${process.env.PUBLIC_URL}/image/img8.jpg`
    },
  ];

  return (
    <div className="events-container">
      <h1 className="page-heading">Upcoming Events</h1>
      {events.map(event => (
        <div key={event.id} className="event-card">
          <img src={event.image} alt={event.title} className="event-image" />
          <div className="event-details">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
