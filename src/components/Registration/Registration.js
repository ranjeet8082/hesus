import React from 'react';

import "./Registration.style.css";

export default function Registration() {
    return (
        <section>
            <h2 className="section-heading">Registration</h2>
            <form className="registration-form">
                <div className="form-input-wrapper">
                    <label htmlFor="firstName" className="input-label">First Name</label>
                    <input type="text" name="firstName" className="input-element" />
                </div>
                <div className="form-input-wrapper">
                    <label htmlFor="firstName" className="input-label">Email</label>
                    <input type="email" name="" id="" className="input-element" />
                </div>
                <div className="form-input-wrapper">
                    <label htmlFor="firstName" className="input-label">Password</label>
                    <input type="password" name="" id="" className="input-element" />
                </div>
                <div className="form-buttons">
                    <input className="form-button cancel-btn" type="button" value="Cancel" />
                    <input className="form-button submit-btn" type="submit" value="Submit" />
                </div>
            </form>
        </section>
    )
}
