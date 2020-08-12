import React from "react";

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const WithAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private message!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Login</p>}
    </div>
  );
};

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const test = () => (
  <div>
    <AuthInfo info="caca" isAuth={false} />
  </div>
);

export default () => test();
