import React from 'react';

const Authorization = (WrappedComponent, allowedRoles, userType) => {
  return class WithAuthorization extends React.Component {
    render() {
      if (allowedRoles.includes(userType)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return (
          <div>
            <h3>
              This user type "{userType}" not allowed to view the dashboard
              page/s of: "
            </h3>
            {allowedRoles.map(dashboard => {
              return <h2>-{dashboard}</h2>;
            })}
          </div>
        );
      }
    }
  };
};

export default Authorization;
