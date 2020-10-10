import React, { Component } from "react";

import HeaderNav from '../Components/HeaderNav';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import '../assets/css/style1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
  render(){
    return (
      <div className="Dashboard">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                  <div className="h-home dashboard active">
                      <Image className="h-profile img-fluid" src={require('../assets/img/grid.png')} />
                      <Link className="h-active" to="/Dashboard"> Dashboard </Link>
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
              <div className="col-lg-8">
                    <div className="shadow-sm bg-home">
                        <div className="col-xs-12 col-sm-6 col-md-6 aa">
                            <div className="his-parap">Balance</div>
                            <h3 className="his-money">Rp. 120.000</h3>
                            <div className="his-phone">+62 813-9387-7946</div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 bg-button">
                            <Link to="/SearchReceiver" className="his-top-button">
                                <Image className="transfer" src={require('../assets/img/arrow-upp.png')} />Transfer
                            </Link>
                            <Link to="/Topup" className="his-top-button">
                                <Image className="topup" src={require('../assets/img/plus.png')} />Top Up
                            </Link>
                        </div>
                    </div>
                    <div className="mt-3 row">
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
                            <div className="shadow-sm">
                                <div className="his-middle-one">
                                    <div className="income">
                                        <Image src={require('../assets/img/arrow-down.png')} />
                                        <p className="parap-income">Income</p>
                                        <p className="money-income">Rp.2.120.000</p>
                                    </div>
                                    <div className="expense">
                                        <Image src={require('../assets/img/arrow-upp.png')} />
                                        <p className="parap-income">Expense</p>
                                        <p className="money-income">Rp.1.560.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                          <div className="shadow-sm">
                              <div className="his-middle-two">
                                  <p className="transaction-his">Transaction History</p>
                                  <Link className="see-all" to="/Transaction">See all</Link>
                                  <div className="h-tran-data">
                                      <Image className="h-imgH img-fluid" alt="profile img" src={require('../assets/img/1.png')} />
                                      <div className="h-status-money3">
                                          <p className="h-money.data1">+Rp.50.000</p>
                                      </div>
                                      <p className="name-home">Samuel Suhi</p>
                                      <p className="status-data">Transfer</p>
                                  </div>
                                  <div className="h-tran-data">
                                      <Image className="h-imgH img-fluid" src={require('../assets/img/logo1.png')} />
                                      <div className="h-status-money4">
                                          <p className="h-money.data2">-Rp.149.000</p>
                                      </div>
                                      <p className="name-home">Netflix</p>
                                      <p className="status-data">Subscription</p>
                                  </div>
                                  <div className="h-tran-data">
                                      <Image className="h-imgH img-fluid" src={require('../assets/img/2.png')} />
                                      <div className="h-status-money3">
                                          <p className="h-money.data1">+Rp.150.000</p>
                                      </div>
                                      <p className="name-home">Christine Mar...</p>
                                      <p className="status-data">Transfer</p>
                                  </div>
                                  <div className="h-tran-data">
                                      <Image className="h-imgH img-fluid" src={require('../assets/img/logo2.png')} />
                                      <div className="h-status-money4">
                                          <p className="h-money.data1">-Rp.249.000</p>
                                      </div>
                                      <p className="name-home">Adobe Inc</p>
                                      <p className="status-data">Subscription</p>
                                  </div>
                              </div>
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

export default Dashboard;
