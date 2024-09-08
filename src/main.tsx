import React from "react";
import ReactDOM from "react-dom/client"; // Corrected import
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import RoutingConfig from './config/router.config'; 
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <RoutingConfig />
        </BrowserRouter>
    </React.StrictMode>
);
