import React from "react"


function Error(){
    return(<>
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
           
            <div className="container">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                        Sorry, an error has occured, Requested page not found!<br />
                        </div>
                        <div className="error-actions">
                        <a href="/" className="btn btn-primary">
                            <i className="icon-home icon-white"></i> Take Me Home </a>
                        <a href="mailto:email@address.com" className="btn btn-default">
                            <i className="icon-envelope"></i> Contact Support </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
                </div>
            </div>
    </>);
}

export default Error