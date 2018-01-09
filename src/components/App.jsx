import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToTopButton from './common/toTopButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div >
        <h1 >Hello World, this is {this.props.topClass.companyName} </h1 >
        <h3 >It's {(new Date()).toString()} </h3 >
        <ToTopButton />
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topClass: state.topClass
  };
};

App.defaultProps = {
  topClass: {
    companyName: 'TopClass'
  }
};

App.propTypes = {
  topClass: PropTypes.string
};


export default connect(mapStateToProps)(App);