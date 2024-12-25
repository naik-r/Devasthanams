import React from 'react';
import './Contact.css';
function Contact() {
    const handleClick = () => {
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const message = document.getElementById('message').value;
    
        console.log('Name:', name);
       
        console.log('Phone Number:', phoneNumber);
        console.log('Message:', message);
    
        alert('Your message has been sent!');
      };
    
  return (
    <div style={{backgroundColor:'#f0f0f0'}}>
    <section class="contact_us">
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="contact_inner">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="contact_form_inner">
                                <div class="contact_field">
                                    <h3>ContactUs</h3>
                                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                    <input type="text" id="name" class="form-control form-group" placeholder="Name" />
                                    <input type="tel" id="phoneNumber" class="form-control form-group" placeholder="phone number" />
                                    <textarea id="message" class="form-control form-group" placeholder="Message"></textarea>
                                    <button class="contact_form_submit" onClick={handleClick} >Send</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="right_conatct_social_icon d-flex align-items-end">
                                
                            </div>
                        </div>
                    </div>
                    <div class="contact_info_sec">
                        <h4>Contact Info</h4>
                        <div class="d-flex info_single align-items-center">
                            <i class="fas fa-headset"></i>
                            <span>+91 9440231178</span>
                        </div>
                        <div class="d-flex info_single align-items-center">
                            <i class="fas fa-envelope-open-text"></i>
                            <span>jyothikumar@gmail.com</span>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="map_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="map_inner">
                    <h4>Find Us on Google Map</h4>
       
                    <div class="map_bind">
                    
                    <iframe
      title="Hanuman Temple"  
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15527.620206919417!2d79.7686718!3d13.3561797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d61bbaefc2ebd%3A0xef7605a5683cbbf8!2sAnjaneya%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1718089699646!5m2!1sen!2sin" 
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  );
}

export default Contact;
