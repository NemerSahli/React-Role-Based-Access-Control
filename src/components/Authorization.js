import React,{Component} from 'react'

const Authorization = (WrappedComponent, allowedRoles, userType) => {
  return class WithAuthorization extends React.Component {
    render() {
      // const { userType } = this.props.user;
      
      if (allowedRoles.includes(userType)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <h1>You are not allowed to view this page!</h1>;
      }
    }
  };
};

export default Authorization;
