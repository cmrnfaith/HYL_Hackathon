//=============React Elements=============//
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  redirect_url,
  loginStatus,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!loginStatus) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: redirect_url, state: { from: props.location } }}
            />
          );
        }

        // authorized so return component
        return <Component {...props} />;
      }}
    />
  );
}
export default PrivateRoute;
