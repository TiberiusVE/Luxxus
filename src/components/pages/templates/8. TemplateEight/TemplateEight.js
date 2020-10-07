import React, { Component } from 'react';
import '../TemplateOne.css';

// Organisms
import Uploader from '../../../organisms/Uploader/Uploader';

class TemplateEight extends Component {
    render() {

        return (
            <main id="template_one" className="overview">
                {/* Image Background goes in the following line  */}
                <section className="header" style={{background: "url(https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)", backgroundPosition: "bottom", backgroundSize: "cover", minHeight: "80vh"}}>
                    <div className="container">
                        <div className="row" style={{width: "100%"}}>
                            <Uploader title="Header" content="Upload Graphic" />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default TemplateEight;