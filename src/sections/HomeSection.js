import React,{Component} from 'react';
import './home.scss';

export default class HomeSection extends Component {
    render(){
        return (
            <section id="home" 
                className="homesection homesection--size homesection--theme">
                <div className="center">
                    <div className="homesection__left">
                        <h2 className="subtitle">Hello</h2>
                        <h1 className="title">I'M ABHISHEK KUMAR</h1>
                        <span className="line"></span>
                        <p className="description">
                            Fullstack developer who uses react, mysql, express and node
                            as my stack. And I also build hybrid apps using react native and 
                            native apps using android studio.
                        </p>
                        <button className="hire-button">Hire Me</button>
                    </div>
                    <div className="homesection__right">
                        <div className="user-image"></div>
                    </div>
                </div>
            </section>
        )
    }
}