import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    title: 'Darshanam',
    description: 'An auspicious first glance at the divinity in the temple is called Darshanam. A darshanam allows devotees to transcend into a peaceful moment. Experience the divine presence with our serene Darshanam services.',
    img: `${process.env.PUBLIC_URL}/image/darshan.jpeg`,
    details: 'During Darshanam, devotees can offer their prayers and witness the divine presence in a peaceful atmosphere. It is a moment of spiritual connection and introspection.',
    additionalContent: (
      <>
        <p>
          Darshanam is a sacred ritual that allows devotees to have a direct visual encounter with the deity in the temple. It is considered an auspicious and spiritually uplifting experience where devotees can offer their prayers and receive blessings.
          In our temple, Darshanam is conducted with utmost reverence, creating a serene atmosphere conducive to meditation and spiritual introspection. Devotees often experience a sense of peace and divine presence during this ritual.
        </p>
      </>
    ),
  },
  {
    title: 'Pratyaksha Seva',
    description: 'Pratyaksha Seva is performing/attending Temple Sevas in Person. One may book a Pratyaksha Seva online and offline. Join us physically in our temple and participate in the traditional Seva rituals.',
    img: `${process.env.PUBLIC_URL}/image/prathyaksha.png`,
    details: 'Pratyaksha Seva allows devotees to participate in various temple rituals and ceremonies in person. It includes offerings, chanting, and other traditional practices.',
    additionalContent: (
      <>
        <p>
          Pratyaksha Seva offers devotees the opportunity to actively participate in the sacred rituals and ceremonies conducted within the temple premises. It is a way to connect deeply with the spiritual traditions and practices of our temple.
          By joining Pratyaksha Seva, devotees contribute to the community's spiritual well-being and experience the transformative power of traditional Seva rituals firsthand.
        </p>
      </>
    ),
  },
  {
    title: 'Paroksha Seva',
    description: 'Paroksha Seva is for those who cannot visit the temple in person and wish to perform/attend Temple Sevas digitally. One may book a Paroksha Seva online. Participate in our sacred Seva ceremonies from anywhere in the world.',
    img: `${process.env.PUBLIC_URL}/image/paroksha.png`,
    details: 'Paroksha Seva enables devotees to participate in temple rituals and prayers remotely through digital platforms. It provides an opportunity for virtual attendance and spiritual engagement.',
    additionalContent: (
      <>
        <p>
          Paroksha Seva allows devotees who are unable to physically visit the temple to participate in its rituals and prayers virtually. It bridges the gap between distance and devotion, enabling spiritual connection from anywhere in the world.
        Through Paroksha Seva, devotees can receive blessings and participate in the temple's sacred ceremonies, fostering a sense of belonging and spiritual fulfillment.
        </p>
      </>
    ),
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleDetails = (index) => {
    if (expandedService === index) {
      setExpandedService(null); // Collapse if already expanded
    } else {
      setExpandedService(index); // Expand the clicked service
    }
  };

  return (
    <div className="services-container">
      <h1>Sevas and Darshanam</h1>
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.img} alt={service.title} />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          {expandedService === index ? (
            <>
              <div className="service-details">
                <p>{service.details}</p>
                {service.additionalContent && (
                  <div className="additional-content">
                    {service.additionalContent}
                  </div>
                )}
                <p
                  className="learn-more-text"
                  onClick={() => toggleDetails(index)}
                  style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
                >
                  Learn Less
                </p>
              </div>
            </>
          ) : (
            <p
              className="learn-more-text"
              onClick={() => toggleDetails(index)}
              style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
            >
              Learn More
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
