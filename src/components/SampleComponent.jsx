import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { companyCreated } from '../actions/topClassActions';


class SampleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }

  render() {
    return (
      <div />
    );
  }
}

SampleComponent.propTypes = {
  optionName: PropTypes.string.isRequired,
  optionPrice: PropTypes.number.isRequired
};


const mapStateToProps = (state) => {
  return {
    topClass: state.topClass
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    priceIncreased: companyCreated
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(SampleComponent);
