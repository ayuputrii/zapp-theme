import React, { Component } from "react";

import HeaderNav from '../Components/HeaderNav';
import Image from 'react-bootstrap/Image';

import { Link } from "react-router-dom";

import '../assets/css/style1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Confirmation extends Component {
  render(){
    return (
      <div className="Confirmation">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                  <div className="h-home dashboard">
                      <Image className="h-prof img-fluid" src={require('../assets/img/grid.png')} />
                      <Link to="/Dashboard" className="h-dashboard">
                        Dashboard
                      </Link>
                  </div>
                  <div className="h-home active">
                      <Image className="h-arrow img-fluid" src={require('../assets/img/arrow-up.png')} />
                      <Link className="h-active" to="/SearchReceiver"> Transfer </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../assets/img/plus.png')} />
                      <Link to="/Topup" className="h-dashboard">
                        Topup
                      </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../assets/img/user.png')} />
                      <Link to="/Profile" className="h-dashboard">
                        Profile
                      </Link>
                  </div>
                  <div className="h-homee">
                      <Image className="h-prof img-fluid" src={require('../assets/img/log-out.png')} />
                      <Link to="/" className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                  <div className="s-search">
                      <p className="s-rec">Transfer To</p>
                  </div>
                  <div className="input-group mb-3 iconn">
                      <div className="card7 col-md-11">
                        <Link className="card-block stretched-link text-decoration-none" to="/Blank">
                          <Image className="c-Pconfirm img-fluid" alt="profile img" src={require('../assets/img/1.png')} />
                          <p className="c-Name">Samuel Suhi</p>
                          <p className="c-No">+62 813-8492-9994</p>
                        </Link>
                      </div>
                      <div class="s-details">
                          <p class="s-det">Details</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Amount</p>
                          <p class="c-status">Rp100.000</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Ballance Left</p>
                          <p class="c-status">Rp20.000</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Date & Time</p>
                          <p class="c-status">May 11, 2020 - 12.20</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Notes</p>
                          <p class="c-status">For buying some socks</p>
                      </div>
                      <div class="container py-4">
                          <button class="nav justify-content-center bg-link ml-auto mt-5" id="continue" data-toggle="modal" data-target="#continues">Continue</button>
                      </div>
                      <br/><br/>
                  </div>
                  <div class="modal fade" id="continues" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div id="modal" class="modal-dialog" role="document">
                       <div class="modal-content rounded-0">
                           <div class="modal-header">
                               <h5 class="heading pin" id="exampleModalCenterTitle">Enter Pin to Transfer</h5>
                               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                               </button>
                           </div>
                           <form action="success.html">
                               <div class="modal-body">
                                   <p class="heading pin2">Enter your 6 digits PIN for confirmation <br/> to continue transferring money.</p>
                                   <div class="form-row d-flex justify-content-center">
                                       <div class="form-group col-2">
                                           <input id="btn-border" type="text" class="form-control border-primary text" />
                                       </div>
                                       <div class="form-group col-2">
                                           <input id="btn-border" type="text" class="form-control border-primary text" />
                                       </div>
                                       <div class="form-group col-2">
                                           <input id="btn-border" type="text" class="form-control border-primary text" />
                                       </div>
                                       <div class="form-group col-2">
                                           <input id="btn-border" type="text" class="form-control border-primary text" />
                                       </div>
                                       <div class="form-group col-2">
                                           <input id="btn-border" type="text" class="form-control border-primary text" />
                                       </div>
                                       <div class="form-group col-2">
                                           <input id="btn-border" type="text" class="form-control border-primary text" />
                                       </div>
                                   </div>
                               </div>
                               <div class="modal-footer flex-center">
                                   <button type="submit" class="btn btn-primary">Continue</button>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
              </div>
          </div>
        </div>
        <footer>
            <div className="footer-container">
                <nav className="navbar navbar mt-3" id="footer-bar">
                    <p className="nav-link" id="reserved">
                        2020 Zwallet. All right reserved.
                    </p>

                    <p className="nav-link ml-auto contact1 bottom-footer contact1">
                        +62 5637 8882 9901
                    </p>

                    <p className="nav-link contact1 bottom-footer contact1">
                        contact@zwallet.com
                    </p>
                </nav>
            </div>
        </footer>
      </div>
    )
  }
}

export default Confirmation;
