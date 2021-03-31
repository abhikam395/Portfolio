import React,{Component} from 'react';
import './contact.scss';
import {HiLocationMarker, HiPhone, HiMail} from 'react-icons/hi'

export default class ContactSection extends Component {
    render(){
        return (
            <section id="contact" 
                className="contactsection 
                    contactsection--size 
                    contactsection--theme">
                <div className="center 
                    contactsection__content 
                    contactsection__content--size">
                    <form className="form form--size ">
                        <div className="form__box">
                            <label className="form__label">FIRST NAME *</label>
                            <input type="text" className="form__input"/>
                        </div>
                        <div className="form__box">
                            <label className="form__label">LAST NAME *</label>
                            <input type="text" className="form__input"/>
                        </div>
                        <div className="form__box form__mt">
                            <label className="form__label">EMAIL *</label>
                            <input type="email" className="form__input"/>
                        </div>
                        <div className="form__box form__mt">
                            <label className="form__label">MESSAGE *</label>
                            <input type="text" className="form__input"/>
                        </div>
                        <div className="form__box form__mt">
                            <label className="form__label">ADDITIONAL DETAILS</label>
                            <textarea type="text" className="form__textarea"/>
                        </div>
                        <button className="form__button form__button--size">Send Message</button>
                    </form>
                    <hr className="contactsection__line"></hr>
                    <div className="contactsection__contact">
                        <h3 className="contactsection__info">Contact Information</h3>
                        <div className="contactsection__row">
                            <HiLocationMarker />
                            <h5 className="contactsection__label">Deal Raipur road 
                                Dehradun, Uttarakhand, India
                            </h5>
                        </div>
                        <div className="contactsection__row">
                            <HiPhone />
                            <h5 className="contactsection__label">9997260969</h5>
                        </div>
                        <div className="contactsection__row">
                            <HiMail />
                            <h5 className="contactsection__label">abhikam395@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}