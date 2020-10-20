import React from "react"

function About(){
    return(<>
      <div className="container">
        <div>
        <br /><br />
            <h1 className="about-top-title">About us</h1><br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum. </p>
        </div>
        <br /><br /><br /><br /><br />
        <div>
            <h1 className="about-top-title">Our Team</h1><br />
        </div>
        <div className="mx-auto text-center">
            <div className="row" style={{justifyContent: "center"}}>
                <div className="card col-md-3">
                    <div className="card-body">
                        <img src="pic.png" style={{borderRadius: "60%;"}} height="200px" alt="" />
                        <div className="card-title">
                            <h3>Team Member</h3>
                        </div>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-body">
                        <img src="pic.png" style={{borderRadius: "60%;"}} height="200px" alt="" />
                        <div className="card-title">
                            <h3>Team Member</h3>
                        </div>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-body">
                        <img src="pic.png" style={{borderRadius: "60%;"}} height="200px" alt="" />
                        <div className="card-title">
                            <h3>Team Member</h3>
                        </div>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-body">
                        <img src="pic.png" style={{borderRadius: "60%;"}} height="200px" alt="" />
                        <div className="card-title">
                            <h3>Team Member</h3>
                        </div>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-body">
                        <img src="pic.png" style={{borderRadius: "60%;"}} height="200px" alt="" />
                        <div className="card-title">
                            <h3>Team Member</h3>
                        </div>
                    </div>
                </div>
                <div className="card col-md-3">
                    <div className="card-body">
                        <img src="pic.png" style={{borderRadius: "60%;"}} height="200px" alt="" />
                        <div className="card-title">
                            <h3>Team Member</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>);
}


export default About