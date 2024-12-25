import React from "react";
import "../App.css";
function Home(){
    return(
        <div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
<div className="carousel-indicators" id="Home">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner" >
  <div className="carousel-item active">
    <img src={`${process.env.PUBLIC_URL}/image/d10.jpg`}  className="d-block w-100" alt="img" height="550px"/>
    
  </div>
  <div className="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/image/d13.jpg`}  className="d-block w-100" alt="img" height="550px"/>
    
  </div>
  <div className="carousel-item ">
    <img src={`${process.env.PUBLIC_URL}/image/d8.jpg`}  className="d-block w-100" alt="img" height="550px"/>
    
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>


<div id="Amenities">

<h2 id="amenities1" className="text">ONE OF THE TEMPLES TO VISIT AROUND TIRUPATI</h2>

<div id="grid">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col p-3 mb-5 bg-body rounded">
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/d2.JPG`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Architecture</h5>
        <p className="card-text">The temple's architecture reflects traditional South Indian temple design, 
        characterized by its gopuram (tower), intricately carved pillars, and sanctum sanctorum. 
        The temple complex often includes various shrines and spaces for rituals and ceremonies. 
        Visitors can explore the serene environment, which adds to the spiritual experience of visiting the temple.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded">
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/d1.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Significance</h5>
        <p className="card-text">The Sri Lakshmi Ganapathi Hanumatheesawara Temple holds immense religious significance for devotees. 
        Lord Hanuman and Lord Ganesha are worshipped for their ability to remove obstacles and provide protection.
        Many devotees visit this temple to seek blessings for courage, wisdom, and protection from evil.</p>
      </div>
    </div>
  </div>

  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/d6.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Pilgrimage and Devotion</h5>
        <p className="card-text">The temple is a popular pilgrimage site for Hanuman devotees. 
        People from neighboring villages and distant places visit the temple to offer prayers and seek blessings. 
        It is believed that worshipping Anjaneya Swamy here can bring relief from hardships and fulfillment of wishes.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/d14.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Power of Hanuman</h5>
        <p className="card-text"> Hanuman is often depicted as a muscular figure, symbolizing physical strength and prowess.
        He fearlessly faced formidable challenges and adversaries, including demons and monsters, showcasing his indomitable courage.
        Hanuman's unwavering devotion to Lord Rama is legendary. He dedicated his life to serving and aiding Lord Rama in his quest to
         rescue Sita and defeat the demon king Ravana.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/d15.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Power of Ganesha</h5>
        <p className="card-text">Ganesha is best known for his ability to remove obstacles, 
        both physical and metaphorical. 
        Devotees often invoke him at the beginning of any important task or journey to ensure success and smooth progress.
        His large head symbolizes wisdom and understanding, and his wide ears signify the ability to listen to the
         prayers and needs of his devotees.</p>
      </div>
    </div>
  </div>
  <div className="col p-3 mb-5 bg-body rounded" >
    <div className="card h-100">
      <img src={`${process.env.PUBLIC_URL}/image/d16.jpg`}  className="card-img-top" alt="..." height="200px" width="200px"/>
      <div className="card-body">
        <h5 className="card-title">Power of Both Gods</h5>
        <p className="card-text">Temples dedicated to both Lord Ganesha and Lord Hanuman are quite common,
         as both deities hold significant roles in Hindu mythology and are revered by millions of devotees worldwide.
          Such temples serve as centers of worship where devotees seek blessings, 
        offer prayers, and perform rituals to both deities. </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>




</div>

);
}
export default Home;