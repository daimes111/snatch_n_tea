import "./styles.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowersRouter as Router } from "react-router-dom"
import App from "./pages/App/App"

const root = ReactDOM.createRoot(getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
)