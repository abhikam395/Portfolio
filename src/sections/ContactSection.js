import React,{Component} from 'react';
import './contact.scss';

export default class ContactSection extends Component {
    render(){
        return (
            <section id="contact" 
                className="contactsection contactsection--size contactsection--theme">
                <div className="center contactsection__content">
                    <form className="form form--size ">
                        <div className="form__row form__mt">
                            <div className="form__box">
                                <label className="form__label">FIRST NAME *</label>
                                <input type="text" className="form__input"/>
                            </div>
                            <div className="form__box">
                                <label className="form__label">LAST NAME *</label>
                                <input type="text" className="form__input"/>
                            </div>
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
                    <h3 className="contactsection__info">Contact Information</h3>
                    <div className="contactsection__contact"></div>
                </div>
            </section>
        )
    }
}