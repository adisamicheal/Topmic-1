import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';

import Navbar from './Navbar';
import ResponsiveNav from './ResponsiveNav';


const Nav = ({ headerData }) => {
  return (
    <div>
      <div className="header-wrapper">
        <img
          className="header-logo"
          src="./images/logo.jpg"
          alt="header logo is not available!"
        />
        <div className="my-nav">
          <Navbar dataNavbar={headerData[1].dataNavbar} />
          <div id="div4" />
        </div>
      </div>
      <ResponsiveNav data={headerData} />
    </div>
  );
};

function mapStateToProps({ headerData }) {
  return {
    headerData
  };
}
// ###################### SIMPLEST FORM OF PROP-TYPES #####################

Nav.propTypes = {
  headerData: arrayOf(object.isRequired).isRequired
};

export default connect(mapStateToProps, {})(Nav);