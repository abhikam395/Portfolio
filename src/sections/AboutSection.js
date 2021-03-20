import React,{Component} from 'react';
import './about.scss';

export default class AboutSection extends Component {
    render(){
        return (
            <section id="about" 
                className="aboutsection aboutsection--size aboutsection--theme">
                <div className="center">
                    <div className="aboutsection__left">
                        <div className="about-image"></div>
                    </div>
                    <div className="aboutsection__right">
                        <h2 className="about-title">About me</h2>
                        <span className="line"></span>
                        <p className="about-description">
                            Fullstack developer who uses react, mysql, express and node
                            as my stack. And I also build hybrid apps using react native and 
                            native apps using android studio.
                        </p>
                        <button className="cv-button">Download CV</button>
                    </div>
                </div>
            </section>
        )
    }
}