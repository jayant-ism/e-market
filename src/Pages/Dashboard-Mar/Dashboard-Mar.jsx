import React from "react"

function DashboardMar(){
    return(<>
            <br />
    
    <div className="container">
       <div className="row">
         <div className="col-sm-9 col-md-7 col-lg-5 mx-auto dashboard">
           <a href="/import" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Import</a>
           <a href="/shop" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Imported</a>
           <a href="/profile" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Profile</a>
           <a href="/editprofile" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Edit-Profile</a>
           <a href="/changepassword" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Change Password</a>
           <a href="/" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Logout</a>
         </div>
       </div>
     </div>
    </>);
}


export default DashboardMar