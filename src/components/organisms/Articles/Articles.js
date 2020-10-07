import React, { Component } from 'react';
import './Articles.css';

import Link from '../../atoms/Link/Link';

class Articles extends Component {
    render() {
        return (
            <article>
                <h2>This is my article</h2>
                <p>This is the content of my article</p>
                <Link href="/blog/articles/1" title="Learn more" />
            </article>
        )
    }
}

export default Articles;