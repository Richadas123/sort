

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";

// Wrapper component to enable redirection after login
const Auth0ProviderWithRedirectCallback = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/");
  };

  return (


    <Auth0Provider
      domain="dev-h53yw8m1dnygxzel.us.auth0.com"
      clientId="QdNlwTy7TtprZDHip1tGEwLS6aR99vTd"
      authorizationParams={{
      redirect_uri: "https://richadas123.github.io/sort/"
    }}
    onRedirectCallback={onRedirectCallback}
  >
  {children}
</Auth0Provider>

  );
};

// Main app render with HashRouter
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Auth0ProviderWithRedirectCallback>
      <App />
      <Toaster />
    </Auth0ProviderWithRedirectCallback>
  </HashRouter>
);
