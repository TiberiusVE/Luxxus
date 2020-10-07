import React, { Component } from 'react';
import './Uploader.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Atoms
import Title from '../../atoms/Title/Title';

function Description (props) {
        
    const { t, i18n } = useTranslation();

    return (
        <div className="uploader">
            <Title title={props.title} /> {/* Main Title  */}
            <h2 style={{color: "#fff", textAlign: "center"}}>Tagline</h2>  {/* Tagline Title  */}
            <span class="file">
                <input type="file" name="myFile" id="myFile" />
            </span>
            <label for="myFile">
                <span>{props.content}</span>
            </label>
        </div>
    )
}

export default Description;