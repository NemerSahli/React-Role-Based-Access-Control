import React,{Component} from 'react'

const Authorization = (WrappedComponent, allowedRoles) => {
  return class WithAuthorization extends React.Component {
    render() {
      // const { userType } = this.props.user;
      const role = 'Admin'
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <h1>You are not allowed to view this page!</h1>;
      }
    }
  };
};

export default Authorization;
