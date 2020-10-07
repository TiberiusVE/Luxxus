import React, { Component } from "react";
import './SlideView.css'

// Slider Library
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Organisms
import Description from '../../organisms/Description/Description';

class SlideView extends Component {
    render() {
        return (
            <Slider
                autoplay={true}
                fade={true}
                dots={true}
                speed={3000}
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1} 
                pauseOnHover={false}
                pauseOnFocus={false}
            >
                {this.props.slider.map((slide, index) => {
                    return <div className="slide_container" key={index}>
                               <div className={"slide slide-" + index} style={{ backgroundImage: `url(/images/stock/${slide.image})`, backgroundSize:'cover'}}>
                                    <Description title={slide.title} content={slide.content}/>
                               </div>
                          </div>
                })}
            </Slider>
        )
    }
}

export default SlideView;