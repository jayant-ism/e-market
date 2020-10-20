import React from "react"


function Import(){
    return(<>
         <br />
    
    <div className="container">
        
      <div className="profile-bottom">
       <div className="row">
           <div className="col-md-12">
               <div className="changepassword-title">
                   <p>Import</p>
               </div>
           <div className="col-12 mx-auto">
              
               <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                   <form className="form-signin">
                     <div className="form-label-group">
                       <input type="text" id="name" className="form-control shadow" required autofocus />
                       <label for="name">Product-Name</label>
                     </div>
           
                     <div className="form-label-group">
                       <input type="number" id="quantity" className="form-control shadow" required />
                       <label for="quantity">Quantity</label>
                     </div>
                     <div className="form-label-group">
                       <input type="number" id="price" className="form-control shadow" required />
                       <label for="price">Price</label>
                     </div> 
                     <div className="form-label-group">
                       <input type="number" id="size" className="form-control shadow" required />
                       <label for="size">Size or Weight</label>
                     </div>
                     <div className="form-label-group">
                       <textarea className="form-control contact-input shadow" style={{borderRadius: "2rem"}} name="message" id="description" rows="4" required></textarea>
                       <label for="description">Description</label>
                     </div>
                     <div className="form-label-group">
                       <input type="file" className="form-control contact-input shadow" style={{borderRadius: "2rem",paddingTop: "10px"}} name="image" id="image" required />
                       <label for="image"></label>
                     </div>
                     <button className="btn btn-lg btn-primary btn-block text-uppercase shadow" type="submit">Import</button>
                   </form>
                 </div>   
              
           </div>
           </div>
            
            
         </div>
      </div>
     </div>
    </>);
}

export default Import