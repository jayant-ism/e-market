import React from "react"

function Blog(){
    return(<>

       
         <div className="container">
         <div className="card mb-3">
            <img className="card-img-top" src="download.svg" alt="Card_image_cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
             
            </div>
          </div>
        <div className="row" style={{justifyContent: "center"}}>
            {/* <div className="col-md-1"></div> */}
            {/* <div className="col-md-10"> */}
                {/* <div className="row"> */}
                    <div className="col-md-4 ">
                        <div className="card" style={{width: "22rem"}}>
                            <h5 className="card-header">Featured</h5>
                            <img src="pic.png" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="car-title">Title here</h2>
                                <p className="card-text">Info Here</p>
                                <a href="#a" className="btn btn-primary" >More Info</a>
                            </div>
                            
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "22rem"}}>
                            <h5 className="card-header">Featured</h5>
                            <img src="pic.png" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="car-title">Title here</h2>
                                <p className="card-text">Info Here</p>
                                <a href="#a" className="btn btn-primary" >More Info</a>
                            </div>
                            
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "22rem"}}>
                            <h5 className="card-header">Featured</h5>
                            <img src="pic.png" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="car-title">Title here</h2>
                                <p className="card-text">Info Here</p>
                                <a href="#a" className="btn btn-primary" >More Info</a>
                            </div>
                            
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "22rem"}}>
                            <h5 className="card-header">Featured</h5>
                            <img src="pic.png" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="car-title">Title here</h2>
                                <p className="card-text">Info Here</p>
                                <a href="#a" className="btn btn-primary" >More Info</a>
                            </div>
                            
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "22rem"}}>
                            <h5 className="card-header">Featured</h5>
                            <img src="pic.png" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="car-title">Title here</h2>
                                <p className="card-text">Info Here</p>
                                <a href="#a" className="btn btn-primary" >More Info</a>
                            </div>
                            
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "22rem"}}>
                            <h5 className="card-header">Featured</h5>
                            <img src="pic.png" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="car-title">Title here</h2>
                                <p className="card-text">Info Here</p>
                                <a href="#a" className="btn btn-primary" >More Info</a>
                            </div>
                            
                            </div>
                    </div>
        </div>


      

        
          <div className="card">
            <img className="card-img-bottom" src="download.svg" alt="Card_image_cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            
          </div>

    </div>
    </>);
}

export default Blog