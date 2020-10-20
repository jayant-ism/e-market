import React from "react"

function Contact(){
    return(<>
        <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <img src="/img/logo.png" height="200px" alt="logo" />
                <h2>Location :</h2>
                    <p>XYZ Hall, Ram Nagar, Delhi ,India [111111]</p>
                <h2>Email :</h2>
                    <p>email@address.com</p>
                <h2>Phone Number :</h2>    
                    <p>+91-98765-4321</p>
            </div>
            <div className="col-md-5">   
            <br /> <br />
                <h1 className="contact-top-title">Have Some Questions?</h1>    
            <form action="#contact">
                <input type="text" className="form-control contact-top contact-input" name="firstname" placeholder="First Name" id="" />
                <input type="text" className="form-control contact-input" name="Lastname" placeholder="Last Name" id="" />
                <input type="email" className="form-control contact-input" name="email" placeholder="What is Your Email?" id="" />
                <textarea className="form-control contact-input" name="message" placeholder="Your Question's" id="" rows="4"></textarea>
                <button className="btn btn-block btn-primary contact-input" type="submit">Send Message</button>
            </form>
              <br /><br />
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>

    
    <div className="container">
        <h2 className="contact-geo-title">Geo-Location of Our Head Office</h2>
    </div>
    <div id="map-container-google-1" class="z-depth-1-half map-container" style={{height: "500px"}}>
        <iframe title="google-map-location" src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
            style={{border:"0"}} allowfullscreen></iframe>
        </div>
    </>);
}


export default Contact