import React,{Component} from 'react'

const Authorization = (WrappedComponent, allowedRoles, userType) => {
  return class WithAuthorization extends React.Component {
    render() {
      if (allowedRoles.includes(userType)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return (<h1>
         This user type "{userType}" not allowed to view this page of "{allowedRoles}"!</h1>);
      }
    }
  };
};

export default Authorization;
