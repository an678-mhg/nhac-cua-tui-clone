import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { SWRConfig } from "swr";
import PlayerContextProvider from "./context/PlayerContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <PlayerContextProvider>
        <SWRConfig value={{ revalidateOnFocus: false }}>
          <App />
        </SWRConfig>
      </PlayerContextProvider>
    </BrowserRouter>
  </>
);
