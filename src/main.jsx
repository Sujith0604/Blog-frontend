import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/userContext";
import { PostContextProvider } from "./Context/postContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
