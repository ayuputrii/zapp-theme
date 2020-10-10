import React, { Component } from "react";

import HeaderNav from '../Components/HeaderNav';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import '../assets/css/style1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Transaction extends Component {
  render(){
    return(
      <div className="Transaction">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                  <div className="h-home dashboard active">
                      <Image className="h-profile img-fluid" src={require('../assets/img/grid.png')} />
                      <Link to="/Dashboard" className="h-active">
                        Dashboard
                      </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../assets/img/arrow-up.png')} />
                      <Link to="/SearchReceiver" className="h-dashboard">
                        Transfer
                      </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../assets/img/plus.png')} />
                      <Link to="/Topup" className="h-dashboard">
                        Top Up
                      </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../assets/img/user.png')} />
                      <Link to="/Topup" className="h-dashboard">
                        Profie
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
                    <p className="s-rec">Transaction History</p>
                    <p className="s-week">This Week</p>
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

export default Transaction
