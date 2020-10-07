import React, { Component } from 'react';
import './Card.css';

const Card = props => (
    <div id="card">
        <div className="card_image">
            <img src="https://mavence.com/wp-content/uploads/2020/03/AdobeStock_234092003-bis-1-scaled-768x432.jpg" />
        </div>
        <div className="card_content">
            <div className="centered-text">
                {props.children}
            </div>
        </div>        
    </div>
);

export default Card;