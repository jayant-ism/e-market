import React from "react";

function Header(){
    return(
        <>
        <div className="container">              
            <div className="row">
                <div className="col-md-4" style={{textAlign:"center"}}> email@address.com +91-98765 43210 </div>
                <div className="col-md-4"></div>
                <div className="col-md-4 " style={{textAlign:"center"}}><a href="/login">Login</a></div>
            </div>
        </div>

<header className="header sticky-top">
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container"><a className="navbar-brand" href="/">
        <span className="font-weight-bold mr-2 px-3" style={{color:"white", backgroundColor:"#3a7bd5"}}>E</span>
                        <span style={{color: "#3a7bd5"}}>Market</span>
        </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a className="nav-link " href="Shop">Shop</a></li>
                    <li className="nav-item"><a className="nav-link" href="featured">Featured</a></li>
                    <li className="nav-item"><a className="nav-link " href="Blogs">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link " href="about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
        </>);
}

export default Header;