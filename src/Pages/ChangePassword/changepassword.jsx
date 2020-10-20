import React from "react"

function ChangePassword(){
    return(<>
        
    <br />
    
    <div className="container">
        <div className="top-img">
            <img src="cover.jpg" width="100%" alt="cover" />
        </div>
        <div className="row">
            <div className="col-md-12">
               <img src="profile.jpg" class="profile-pic-changepassword"  alt="cover" />
            </div>
            <div className="col-md-12">
              <div className="changepassword-top">
               <h2 className="main">User Name</h2>
               <h2 className="info">email@address.com</h2>
              </div>
            </div>
            
            
        </div>
        <br /><br />
      <div className="profile-bottom">
       <div className="row">
           <div className="col-md-12">
               <div className="changepassword-title">
                   <p>Change Password</p>
               </div>
           </div>
           
   
           <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
               <form className="form-signin">
                 <div className="form-label-group">
                   <input type="password" id="inputEmail" className="form-control shadow" placeholder="Email address" required autofocus />
                   <label for="inputEmail">Current Password</label>
                 </div>
       
                 <div className="form-label-group">
                   <input type="password" id="inputPassword" className="form-control shadow" placeholder="Password" required />
                   <label for="inputPassword">New Password</label>
                 </div>
       
                 <div className="form-label-group">
                   <input type="password" id="inputPasswordagain" className="form-control shadow" placeholder="Password" required />
                   <label for="inputPasswordagain">New Password</label>
                 </div>
   
                 <button className="btn btn-lg btn-primary btn-block text-uppercase shadow" type="submit">Change Password</button>
                
               </form>
             </div>
         
         </div>
      </div>
     </div>
    </>);
}


export default ChangePassword