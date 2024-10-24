import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Auth0Provider
          domain="dev-3151lg3cezjv8mhv.us.auth0.com"
          clientId="hIWfEpf4cGx14yNYxhSRIOQWjfhU4vM7"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
