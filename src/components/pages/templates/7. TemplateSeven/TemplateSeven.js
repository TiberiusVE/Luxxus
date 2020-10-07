import React, { Component } from 'react';
import '../TemplateOne.css';

// Organisms
import Uploader from '../../../organisms/Uploader/Uploader';

class TemplateSeven extends Component {
    render() {

        return (
            <main id="template_one" className="overview">
                {/* Image Background goes in the following line  */}
                <section className="header" style={{background: "url(https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)", backgroundPosition: "bottom", backgroundSize: "cover", minHeight: "80vh"}}>
                    <div className="container" style={{flexDirection: "column", justifyContent: "center"}} id="seven">
                        <div className="row" style={{width: "100%", flexDirection: "column", alignItems: "center"}}>
                            <h1 style={{paddingBottom: "0"}}>Header Title</h1> {/* Main Title  */}
                            <h2>Tagline Title</h2>  {/* Tagline Title  */}
                        </div>
                        <div className="row" style={{width: "100%"}}>
                            <div className="col" style={{textAlign: "center", alignItems: "center"}}>
                                <h2>Text Title</h2>
                                {/* Image Box One goes here  */}
                                <div className="img-block" style={{width: "25%", background: "lightgrey", padding: "5rem 2.5rem", fontSize: "1.15rem"}}>Image</div>
                            </div>
                            <div className="col" style={{textAlign: "center", alignItems: "center"}}>
                                <h2>Text Title</h2>
                                {/* Image Box Two goes here  */}
                                <div className="img-block" style={{width: "25%", background: "lightgrey", padding: "5rem 2.5rem", fontSize: "1.15rem"}}>Image</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default TemplateSeven;