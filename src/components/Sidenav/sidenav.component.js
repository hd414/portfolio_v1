import React from 'react';
import './sidenav.styles.css';
import Github from '../../assets/svg/github.svg';
import Gmail from '../../assets/svg/gmail.svg';
import Insta from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

const Sidenav = () => {
    return (
        <div id="sidenav" className="sideNav_component">
            <ul className="sidenav">
                <li><a target="_blank" href="https://github.com/hd414">
                    <img src={Github}  alt="github" className="logos-github"/>
                    </a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/himanshu-dodrajka-8385231b9/">
                <img src={Linkedin} alt="github" className="logos"/>
                    </a></li>
                <li><a target="_blank" href="https://www.instagram.com/himan_shu414/">
                <img src={Insta} alt="github" className="logos"/>
                    </a></li> 
                <li>  <a target="_blank" href="mailto:himanshuagarwal9856@gmail.com@gmail.com">
                <img src={Gmail} alt="github" className="logos"/>
                    </a></li>
            </ul>
        </div>
    )
}

export default Sidenav;
