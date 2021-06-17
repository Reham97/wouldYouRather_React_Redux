import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {  setRedirectPagePath } from "./actions/actions";
import { login } from "./actions/actions";

function PrivateRoute (props) {
  const determineRenderComponent =(props)=>{ 
    debugger;
    if(props.user)
    {
      return props.children;
    }
    else
    {
      props.login(null,props.page)
      props.setRedirectPagePath(props.location);
      return <Redirect to='/log' />
    }
  }


  return (
    <Route props render={() => {
      return determineRenderComponent(props);
    }} />
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    login: (user,page) => dispatch(login(user,page)),
    setRedirectPagePath: (path) => dispatch(setRedirectPagePath(path)),        
  }
}
export default connect(mapStateToProps, mapDispatch)(PrivateRoute)

