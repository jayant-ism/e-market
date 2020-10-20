import React from "react"

function Login(){
    return (<>
          <br />
 <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <img className="logo-contact center shadow" src="/img/logo.png" alt="logo" />
        <form className="form-signin" action="/dashboard">
          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control shadow" placeholder="Email address" required autofocus />
            <label for="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input type="password" id="inputPassword" class="form-control shadow" placeholder="Password" required />
            <label for="inputPassword">Password</label>
          </div>

          {/* <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input shadow" id="customCheck1">
            <label className="custom-control-label" for="customCheck1">Remember password</label>
          </div>  */}
          <button className="btn btn-lg btn-primary btn-block text-uppercase shadow" type="submit">Login in</button>
          <button className="btn btn-lg btn-google btn-block text-uppercase shadow" type="submit"><i className="fab fa-google mr-2"></i> Login in with Google</button>
          <button className="btn btn-lg btn-facebook btn-block text-uppercase shadow" type="submit"><i className="fab fa-facebook-f mr-2"></i> Login in with Facebook</button>
          <a href="/register" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Create a New One!!!</a>
          <a href="/Login-Mar" className="btn btn-lg btn-primary btn-block text-uppercase shadow">Merchant Login</a>
        </form>
      </div>
    </div>
  </div>
    </>);
}


export default Login