import React, { Component } from 'react';
import '../TemplateOne.css';

// Organisms
import Uploader from '../../../organisms/Uploader/Uploader';

class TemplateNine extends Component {
    render() {

        return (
            <main id="template_one" className="overview">
                {/* Image Background goes in the following line  */}
                <section className="header" style={{background: "url(https://images.pexels.com/photos/122990/pexels-photo-122990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)", backgroundPosition: "bottom", backgroundSize: "cover", minHeight: "80vh"}}>
                    <div className="container">
                        <div className="row" style={{width: "100%"}} id="nine">
                            <Uploader title="Header" content="Upload JPEG / Photo Load" />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default TemplateNine;