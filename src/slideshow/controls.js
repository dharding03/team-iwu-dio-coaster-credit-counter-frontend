import React, { useState } from 'react';

import "./controls.css";

function Slideshow({ images = ['./Diamondback.JPG', './Banshee.JPG', './Orion.JPG', './copperheadLogo.JPG', './furyLogo.JPG', './furyLift.JPG', './nighthawkLoop.JPG', './gatekeeperLogo.JPG', './millenniumForce.JPG', './raptor.JPG', './steelVengeance.JPG', './steelVengeanceLogo.JPG', './valravnLogo.JPG', './wickedtwister.JPG']}) {
    const [state, setState] = useState({
        currentSlide: 0
    })
    function previous() {
        if (state.currentSlide > 0) {
            setState(prevState => ({
                ...prevState,
                currentSlide: prevState.currentSlide - 1
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                currentSlide: images.length - 1
            }))
        }
    }

    function next() {
        if (state.currentSlide === images.length - 1) {
            setState(prevState => ({
                ...prevState,
                currentSlide: 0
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                currentSlide: prevState.currentSlide + 1
            }))
        }
    }

    return (
        <section className="slideshow">
            <div className="slideshow-controller">
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
            <div className="slide-holder">
                <section className="slide-current-slide">
                    <div className="slide-thumbnail">
                        <img src={images[state.currentSlide]} className="App-logo" alt="logo" />
                    </div>
                </section>
            </div>

        </section>



    )
}

export default Slideshow;