import React, {Component} from 'react';
import './footer.scss';

import {HiLocationMarker, HiPhone, HiMail} from 'react-icons/hi'

export default class FooterComponent extends Component{
    render(){
        return (
            <footer className="footer footer--size">
                <h1 className="footer__title">Contact Information</h1>
                <div className="footer__content">
                    <div className="footer__row footer__m2">
                        <HiLocationMarker />
                        <h5 className="footer__label">Deal Raipur road 
                            Dehradun, Uttarakhand, India
                        </h5>
                    </div>
                    <div className="footer__row footer__m2">
                        <HiPhone />
                        <h5 className="footer__label">9997260969</h5>
                    </div>
                    <div className="footer__row footer__m2">
                        <HiMail />
                        <h5 className="footer__label">abhikam395@gmail.com</h5>
                    </div>
                </div>
            </footer>
        )
    }
}