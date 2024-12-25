import React from 'react';

import "../App.css"
const Gallery = () => {
  return (
    <div id="gallerydiv" style={{backgroundColor:'#f0f0f0'}}>
      <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>Gallery</h1>
      <br /><br />
      <h3 id="marriage" style={{ textAlign: 'center', fontStyle: 'italic' }}>Sri Lakshmi Ganapathi Hanumatheesawara Temple </h3>
      <br />
      <div id="gallery">
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d1.jpg`} alt="temple" height="250px" width="400px" id="gh"/>
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d2.jpg`} alt="temple" height="250px" width="400px" id="gh" />
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d3.JPG`} alt="temple" height="250px" width="400px" id="gh"/>
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d9.jpg`} alt="temple" height="250px" width="400px" id="gh"/>
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d5.jpg`} alt="temple" height="250px" width="400px" id="gh"/>
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d6.jpg`} alt="temple" height="250px" width="400px" id="gh" />
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d11.jpg`} alt="temple" height="250px" width="400px" id="gh" />
        <img className="shadow p-3 mb-5 m-3 bg-body rounded" src={`${process.env.PUBLIC_URL}/image/d8.jpg`} alt="temple" height="250px" width="400px" id="gh" />
      </div>

      
    </div>
  );
};

export default Gallery;
