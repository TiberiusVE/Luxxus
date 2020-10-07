import React, { Component } from 'react';
import './Blog.css';

// Atoms
import Card from '../../atoms/Card/Card';

// Organisms
import Articles from '../../organisms/Articles/Articles';

class Blog extends Component {
    render() {
        return (
            <section id="blog">
                <div className="container">
                    <div className="row">
                        <Card>
                            <Articles />
                        </Card>
                        <Card>
                            <Articles />
                        </Card>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog;