import React, { useEffect, useState } from 'react';
import './contact.css';
import L_TELEPHONE from '../../assets/svg/telephone.svg'
import Github from '../../assets/svg/github.svg';
import Gmail from '../../assets/svg/gmail.svg';
import Insta from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import SlideAnimation from '../../components/SlideAnimation/slideAnimation';
import '../styles.css';

const Contact = () => {
    const [darkClass, setdarkClass] = useState('dark');

    useEffect(() => {
        window.setTimeout(() => {
            setdarkClass('');
        }, 1000)
    }, [])

    return (
        <div>
            <SlideAnimation />
            <div className={darkClass}>
                <div className="contactHeader">
                    <h1>Get in Touch</h1>
                    <img src={L_TELEPHONE} alt="telephone" className="telephone-svg" />
                </div>
                <div className="contact-component">
                    <div className="contact">
                        I am available on almost every social media.<br /> my inbox is always open.
                        Whether you have a question or <br /> just want to say hi, I'll try my best to get back to you!,
                        <br />Till than Enjoy My portfolio.
                        <br />
                        <br />
                        <br />

                    </div>

                </div>
            </div>
            <div className='contact_details'>
                <a className="mail" style={{ textDecoration: "none", fontSize: "1rem", textAlign: "center", color: 'aqua' }} href="mailto:himanshuagarwal9856@gmail.com@gmail.com">himanshuagarwal9856@gmail.com@gmail.com</a>
                <ul style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: '80vw',
                    margin: 'auto'

                }} >
                    <li><a target="_blank" href="https://github.com/hd414">
                        <img src={Github} alt="github" className="contact-logos contact-logos-github" />
                    </a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/himanshu-dodrajka-8385231b9/">
                        <img src={Linkedin} alt="github" className="contact-logos contact-logos-link" />
                    </a></li>
                    <li><a target="_blank" href="https://www.instagram.com/himan_shu414/">
                        <img src={Insta} alt="github" className="contact-logos contact-logos-insta" />
                    </a></li>
                    <li>  <a target="_blank" href="mailto:himanshuagarwal9856@gmail.com@gmail.com">
                        <img src={Gmail} alt="github" className="contact-logos contact-logos-mail" />
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
