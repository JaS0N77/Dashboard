import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const NotFound = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>404 Page not found</h1>
            <section className="error-container">
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
                <span className="zero">
                    <span className="screen-reader-text">0</span>
                </span>
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
            </section>
            <div className="link-container">
                <Link to="/" className="more-link">Go to main page</Link>
            </div>
        </>
    );
};

export default NotFound;
