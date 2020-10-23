import React from "react";
import Table from "react-bootstrap/Table";

function Panel() {
  return (
    <>
      <br />

      <div className="container">
        <div className="top-img">
          <img src="cover.jpg" width="100%" alt="cover" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <img
              src="profile.jpg"
              className="profile-pic-changepassword"
              alt="cover"
            />
          </div>
          <div className="col-md-12">
            <div className="changepassword-top">
              <h2 className="main">User Name</h2>
              <h2 className="info">email@address.com</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="profile-bottom">
          <div className="row">
            <div className="col-md-12">
              <div className="changepassword-title">
                <p>Panel</p>
              </div>
              <div className="col-12 mx-auto">
                <div className="panel">
                  <Table striped bordered hover>
                    <thead className="heading">
                      <tr>
                        <th>PRODUCT IMAGE</th>
                        <th>PRODUCT ID</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>CUSTOMER USERNAME</th>
                        <th>CUSTOMER ADDRESS</th>
                        <th>CUSTOMER MOBILE NUMBER</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                      </tr>
                    </thead>
                    <tbody className="rows">
                      <tr>
                        <td>
                          <img
                            alt="product_image"
                            src="pic.png"
                            style={{ height: "80px" }}
                          />
                        </td>
                        <td>4555</td>
                        <td>Adidas running shoes</td>
                        <td>nobita27</td>
                        <td>12 xxx Street, Zebra Crossing, Antarctica</td>
                        <td>999999XXXX</td>
                        <td>1</td>
                        <td> &#x20B9;2999</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="product_image"
                            src="pic.png"
                            style={{ height: "80px" }}
                          />
                        </td>
                        <td>4555</td>
                        <td>Adidas running shoes</td>
                        <td>nobita27</td>
                        <td>12 xxx Street, Zebra Crossing, Antarctica</td>
                        <td>999999XXXX</td>
                        <td>1</td>
                        <td> &#x20B9;2999</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="product_image"
                            src="pic.png"
                            style={{ height: "80px" }}
                          />
                        </td>
                        <td>4555</td>
                        <td>Adidas running shoes</td>
                        <td>nobita27</td>
                        <td>12 xxx Street, Zebra Crossing, Antarctica</td>
                        <td>999999XXXX</td>
                        <td>1</td>
                        <td> &#x20B9;2999</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="product_image"
                            src="pic.png"
                            style={{ height: "80px" }}
                          />
                        </td>
                        <td>4555</td>
                        <td>Adidas running shoes</td>
                        <td>nobita27</td>
                        <td>12 xxx Street, Zebra Crossing, Antarctica</td>
                        <td>999999XXXX</td>
                        <td>1</td>
                        <td> &#x20B9;2999</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="product_image"
                            src="pic.png"
                            style={{ height: "80px" }}
                          />
                        </td>
                        <td>4555</td>
                        <td>Adidas running shoes</td>
                        <td>nobita27</td>
                        <td>12 xxx Street, Zebra Crossing, Antarctica</td>
                        <td>999999XXXX</td>
                        <td>1</td>
                        <td> &#x20B9;2999</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;

// function Panel() {
//   return (
//     <div className="container">
//       <div className="card mb-3" style={{maxWidth: '540px'}}>
//         <div className="row no-gutters">
//           <div className="col-md-4">
//             <img src="shoe.png" className="card-img" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <p className="card-text">
//                 <small className="text-muted">Last updated 3 mins ago</small>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/* <div className="panel">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="pic.png" alt="product_image"/>
                        </div>
                        <div className="col-md-10">
                          <div>Product Id: 31557988</div>
                          <p className="info">
                            This is the product description for that we can take
                            a look how it look like in it or in mobile version
                            so that we can fix it for further to make it look
                            like a professional cart card
                          </p>
                          <div style={{ fontFamily: "sans-serif" }}>
                            Buyer Information:
                          </div>
                          <div className="row">
                            <div className="col-md-3 main">Username:</div>
                            <div className="col-md-3 info">xxxyyyzz</div>
                            <div className="col-md-3 main">Phone Number:</div>
                            <div className="col-md-3 info">55555555XX</div>
                            <div className="col-md-3 main">Size:</div>
                            <div className="col-md-3 info">size here</div>
                            <div className="col-md-3 main">Address:</div>
                            <div className="col-md-3 info">
                              12 xxx Street, Zebra Crossing, Antarctica
                            </div>

                            <div className="col-md-3 main">Quantity</div>
                            <div className="col-md-2 info">1</div>
                            <button type="button" class="btn btn-primary col-md-3 main">
                          Shipped
                        </button><div style={{padding: '2%'}}></div>
                        <button type="button" class="btn btn-success col-md-3 main">
                          Delivered
                        </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="pic.png" alt="product_image"/>
                        </div>
                        <div className="col-md-10">
                          <div>Product Id: 31557988</div>
                          <p className="info">
                            This is the product description for that we can take
                            a look how it look like in it or in mobile version
                            so that we can fix it for further to make it look
                            like a professional cart card
                          </p>
                          <div style={{ fontFamily: "sans-serif" }}>
                            Buyer Information:
                          </div>
                          <div className="row">
                            <div className="col-md-3 main">Username:</div>
                            <div className="col-md-3 info">xxxyyyzz</div>
                            <div className="col-md-3 main">Phone Number:</div>
                            <div className="col-md-3 info">55555555XX</div>
                            <div className="col-md-3 main">Size:</div>
                            <div className="col-md-3 info">size here</div>
                            <div className="col-md-3 main">Address:</div>
                            <div className="col-md-3 info">
                              12 xxx Street, Zebra Crossing, Antarctica
                            </div>

                            <div className="col-md-3 main">Quantity</div>
                            <div className="col-md-2 info">1</div>
                            <button type="button" class="btn btn-primary col-md-3 main">
                          Shipped
                        </button><div style={{padding: '2%'}}></div>
                        <button type="button" class="btn btn-success col-md-3 main">
                          Delivered
                        </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="pic.png" alt="product_image"/>
                        </div>
                        <div className="col-md-10">
                          <div>Product Id: 31557988</div>
                          <p className="info">
                            This is the product description for that we can take
                            a look how it look like in it or in mobile version
                            so that we can fix it for further to make it look
                            like a professional cart card
                          </p>
                          <div style={{ fontFamily: "sans-serif" }}>
                            Buyer Information:
                          </div>
                          <div className="row">
                            <div className="col-md-3 main">Username:</div>
                            <div className="col-md-3 info">xxxyyyzz</div>
                            <div className="col-md-3 main">Phone Number:</div>
                            <div className="col-md-3 info">55555555XX</div>
                            <div className="col-md-3 main">Size:</div>
                            <div className="col-md-3 info">size here</div>
                            <div className="col-md-3 main">Address:</div>
                            <div className="col-md-3 info">
                              12 xxx Street, Zebra Crossing, Antarctica
                            </div>

                            <div className="col-md-3 main">Quantity</div>
                            <div className="col-md-2 info">1</div>
                            <button type="button" class="btn btn-primary col-md-3 main">
                          Shipped
                        </button><div style={{padding: '2%'}}></div>
                        <button type="button" class="btn btn-success col-md-3 main">
                          Delivered
                        </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="pic.png" alt="product_image"/>
                        </div>
                        <div className="col-md-10">
                          <div>Product Id: 31557988</div>
                          <p className="info">
                            This is the product description for that we can take
                            a look how it look like in it or in mobile version
                            so that we can fix it for further to make it look
                            like a professional cart card
                          </p>
                          <div style={{ fontFamily: "sans-serif" }}>
                            Buyer Information:
                          </div>
                          <div className="row">
                            <div className="col-md-3 main">Username:</div>
                            <div className="col-md-3 info">xxxyyyzz</div>
                            <div className="col-md-3 main">Phone Number:</div>
                            <div className="col-md-3 info">55555555XX</div>
                            <div className="col-md-3 main">Size:</div>
                            <div className="col-md-3 info">size here</div>
                            <div className="col-md-3 main">Address:</div>
                            <div className="col-md-3 info">
                              12 xxx Street, Zebra Crossing, Antarctica
                            </div>

                            <div className="col-md-3 main">Quantity</div>
                            <div className="col-md-2 info">1</div>
                            <button type="button" class="btn btn-primary col-md-3 main">
                          Shipped
                        </button><div style={{padding: '2%'}}></div>
                        <button type="button" class="btn btn-success col-md-3 main">
                          Delivered
                        </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */
