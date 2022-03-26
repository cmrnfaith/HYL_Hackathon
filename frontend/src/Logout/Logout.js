//=============React Elements=============//
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ loginStatus, updateLoginStatus, updateLocalUser }) => {
  const [redirect, setRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("/");
  useEffect(() => {
    if (loginStatus) {
      updateLoginStatus(false);
      updateLocalUser({
        username: "",
        password: "",
        country: "",
        date_of_birth: "",
        first_name: "",
        last_name: "",
        email: "",
        is_host: false,
      });

      fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({}),
      })
        .then(async (res) => {
          if (res.status === 200) {
            setRedirect(true);
          } else {
            setRedirectUrl("/viewCrypto");
            setRedirect(true);
          }
        })
        .catch((error) => {
          // Handle error
        });
    }
  }, [loginStatus, updateLoginStatus, updateLocalUser]);

  return (
    <div>
      {redirect ? <Redirect push to={redirectUrl} /> : null}Logout Unsuccessful
    </div>
  );
};

export default Logout;
