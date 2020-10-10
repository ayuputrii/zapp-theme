import React, { Component } from "react";

import HeaderNav from '../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import Axios from 'axios';
import { Link } from "react-router-dom";

import '../assets/css/style1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const Content = () =>{
//   const [users, setUsers] = React.useState("");
//   const [query, setQuery] = React.useState("");
//
//     React.useEffect(() =>{
//       Axios({
//         method: "get",
//         url: `https://jsonplaceholder.typicode.com/${!query ? 'users':  `users/search?q=${query}`}`,
//       })
//       .then((res) => setUsers(res.data.data))
//       .catch((err) => console.log(err.message))
//     }, [query]);
// }

class SearchReceiver extends Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    Axios.get(url)
    .then(users =>{
      this.setState({
        users: users.data
      })
    })
  }
  render(){
    return (
      <div className="SearchReceiver">
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
                      <p className="s-rec">Search Receiver</p>
                  </div>
                  <div className="input-group mb-3 iconn">
                    <input type="text" className="form-control pl-5 py-4" id="input-search" placeholder="Search receiver here" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  </div>
                  {this.state.users.map((item) => {
                    return(
                      <div className="input-group mb-3">
                          <div className="card2 col-md-11">
                            <Link className="card-block stretched-link text-decoration-none" to="/Amount">
                              <Image className="h-img-search img-fluid" alt="profile img" src={require('../assets/img/1.png')} />
                              <p className="h-name-search">{item.name}</p>
                              <p className="h-status-search">{`+62 ${item.phone}`}</p>
                            </Link>
                          </div>
                      </div>
                    )
                  })}
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

export default SearchReceiver;
