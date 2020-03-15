import React, { Component } from 'react';

export default class Homepage extends Component {
    render() {
        return (            
            <div className="container">
                <h3 className="text-center">Welcome!</h3>
                <h3 className="text-center">Create an user to log an exercise.</h3>
                <a href="https://github.com/eddxdd/mern-exercise-tracker"><i className="fa fa-github text-center" style={{display:"block", fontSize:"50px", color:"#212529", textDecoration:"none"}}></i></a>
                <p className="text-center">This app was created using the MERN stack. More info on my GitHub.</p>
            </div>
        );
    }
}