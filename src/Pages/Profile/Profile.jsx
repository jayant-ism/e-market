import React from "react"

function Profile(){
    return(<>
        
    <br />
    
    <div className="container">
        <div className="top-img">
            <img src="cover.jpg" width="100%" alt="cover" />
        </div>
        <div className="row">
            <div className="col-md1"></div>
            <div className="col-md-3">
               <img src="profile.jpg" className="profile-pic"  alt="cover" />
            </div>
            <div className="col-md-4">
               <h2 className="main">User Name</h2>
               <h2 className="info">email@address.com</h2>
            </div>
            <div className="col-md-5">
               <h2 className="info">Address Address Address Address Address Address Address</h2>
            </div>
            
        </div>
        <br /><br />
      <div className="profile-bottom">
       <div className="row">
           <div className="col-md-12">
               <p className="profile-top">About</p>
           </div>
           <div className="col-md-3">
               <h2 className="main">User Name</h2>
               <h2 className="main">Email</h2>
               <h2 className="main">First Name</h2>
               <h2 className="main">Last Name</h2>
               <h2 className="main">Phone Number</h2>
               <h2 className="main">Address</h2>
           </div>
           <div className="col-md-6">
             <h2 className="info">User Name</h2>
             <h2 className="info">Email</h2>
             <h2 className="info">First Name</h2>
             <h2 className="info">Last Name</h2>
             <h2 className="info">Phone Number</h2>
             <h2 className="info">Address Address Address Address Address Address Address</h2>
           </div>
           <div className="col-md-3">
               <div className="profile-buttons">
             <a href="#button" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Change Password</a>
             <a href="#button" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Edit Profile</a>
             <a href="/" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Logout</a>
             <a href="#button" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Delete Account</a>
               </div>
           </div>
         </div>
      </div>
     </div>
    </>);
}

export default Profile