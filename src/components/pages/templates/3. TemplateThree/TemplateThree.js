import React, { Component } from 'react';
import '../TemplateOne.css';

// Atoms
import Title from '../../../atoms/Title/Title';

// Organisms
import List from '../../../organisms/List/List';
import Description from '../../../organisms/Description/Description';
import ListDescription from '../../../organisms/ListDescription/ListDescription';

// Templates
import Header from '../../../templates/Header/Header';
import Features from '../../../templates/Features/Features';

class TemplateThree extends Component {
    render() {

        const list = [
            { elements: ['Higher quality', 'Increased velocity of releases', 'Quicker time to value']}
        ]

        const description = [
            { title: "Challenges", content: ["Dramatically reduced manual security fixes​​", "Achieved continuous development with integrated security testing​​", "Elimination of downstream reactive fixes​​"] },
            { title: "Value Delivered ​", content: ["Quote or whatever​"] },
            { title: "Results Achieved ​", content: ["Saved 22$M in development costs​​", "Increased product throughput by 20% resulting in 30% increase in customer satisfaction​​"] },
        ]

        const flow = [
            { title: "Icons from Containn site", icon: "faShieldCheck"},
            { title: "Challenge", icon: "faBoxAlt"},
            { title: "Value", icon: "faFingerprint"},
            { title: "Results", icon: "faLock"}
        ]

        return (
            <main id="template_one" className="overview">
                <section className="header" style={{background: "url(https://images.pexels.com/photos/2647990/pexels-photo-2647990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
                    <div className="container">
                        <div className="row" style={{width: "100%"}}>
                            <div className="col">
                                <Title title="Accelerated DevSecOps" />  {/* Main Title  */}
                                <List list={list} />
                            </div>
                            <div className="col">
                                <h1 style={{fontSize: "1.5rem"}}>Detailed description</h1>
                                <a className="c_button" style={{textAlign: "center", width: "100%"}}><span>Challenge</span></a>
                                <a className="c_button" style={{textAlign: "center", width: "100%"}}><span>Value</span></a>
                                <a className="c_button" style={{textAlign: "center", width: "100%"}}><span>Value</span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default TemplateThree;