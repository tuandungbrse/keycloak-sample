import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import './index.css';
import keycloak from './keycloak';
import App from './App';

const Root = () => (
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactKeycloakProvider>
)

render(
  <Root />,
  document.getElementById('root')
);