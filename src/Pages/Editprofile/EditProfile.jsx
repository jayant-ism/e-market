import React from "react"


function Editprofile(){
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
               <p className="profile-top">Edit Profile</p>
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
             <h2 className="info"><input type="text" className="form-control" name="User Name" placeholder="User Name" id="User Name" style={{padding : "6px"}} /></h2>
             <h2 className="info"><input type="text" className="form-control" name="Email" placeholder="Email" id="Email" style={{padding : "6px"}} /></h2>
             <h2 className="info"><input type="text" className="form-control" name="First Name" placeholder="First Name" id="First Name" style={{padding : "6px"}} /></h2>
             <h2 className="info"><input type="text" className="form-control" name="Last Name" placeholder="Last Name" id="Last Name" style={{padding : "6px"}} /></h2>
             <h2 className="info"><input type="text" className="form-control" name="Phone Number" placeholder="Phone Number" id="Phone Number" style={{padding : "6px"}} /></h2>
             <h2 className="info"><input type="text" className="form-control" name="Address" placeholder="Address Address Address Address Address Address Address" id="Address" style={{padding : "6px"}} /></h2>
           </div>
           <div className="col-md-3">
               <div className="profile-buttons">
                   <br />
             <a href="/changepassword" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Change Password</a>
             <a href="/profile" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Profile</a>
             <a href="/" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Logout</a>
             <a href="/profile" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Save Setting</a>
               </div>
           </div>
         </div>
      </div>
     </div>
    </>);
}

export default Editprofile