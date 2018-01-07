import React, { Component } from 'react';
import { setVisibilityFilter, setMembers } from '../../actions'
import AllUsers from './allusers'

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setVisibilityFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers)

export default Users