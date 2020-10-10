import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';

import '../assets/css/style1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class HeaderNav extends Component{
  render(){
    return(
        <div className={`header-nav`}>
        <div className="container navbar">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
                    <p className="h-zwallet">{this.props.title}</p>
                </div>
            </div>
            <div className="">
                <Image src={require('../assets/img/Rectangle 25.png')} className="rounded float-left h-img-nav h-nav-right" />
                    <div className="h-nav-bell h-nav-right">
                        <Image src={require('../assets/img/bell1.png')} className="img-fluid" alt="Icon Notification" />
                    </div>
                    <div className="h-name h-nav-right">
                        <p className="name">Robert Chandler</p>
                        <p className="no">+62 8139 3877 7946</p>
                    </div>
            </div>
        </div>
      </div>
    )
  }
}

export default HeaderNav;
