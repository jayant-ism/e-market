import React from "react"

function MobileApp(){
    return(<>
        <br /><br /><br /><br />
        <div className="container">
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4">
            <img src="/img/iphone_11_PNG1.png" alt="" style={{float:"center",marginLeft:"90px" }} width="250px" />
        </div>
        <div className="col-md-7">
        <br/><br/>
            <h1>Get the E-Market App</h1>
            <br />
            <p style={{fontSize: "22px"}}>We will send you a link, open it on your <br />
                phone to download the app</p>
                <br />
            <form action="#" method="POST">
                <div className="input-group col-8">
                    <input type="text" className="form-control" placeholder="E-Mail Address" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button">Share App Link</button>
                    </div>
                  </div>
            </form><br />
            <p>Download app from</p>
            <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
            <button style={{marginLeft:"10px"}} type="button" className="btn btn-outline-primary btn-lg download-button"><i className="fab fa-google-play"></i> Download</button>
        </div>
    </div>
        </div>
        <br /><br /><br /><br />
    </>);
}

export default MobileApp