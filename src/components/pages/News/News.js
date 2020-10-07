import React, { Component } from 'react';
import './News.css';

class News extends Component {

    // A news update event component. Thinking an image on left, with a header on right as the title, then a tagline underneath. then on third row underneath this will be Event dates/location (maybe a different component for dates/location). 
    // The objective is to create a rolling news updated with a carousel on top 

    render() {
        return (
            <section id="news">
                <div className="container">
                    <div className="row">
                        This is my News page
                    </div>
                </div>
            </section>
        )
    }
}

export default News;