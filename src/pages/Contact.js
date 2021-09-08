import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0660468405">
                                <span className="clickInput" onClick={() => {
                                    alert('Téléphone copié ! ');
                                }}>
                                    06 60 46 84 05
                                </span>
                            </CopyToClipboard>
                        </li>
                        
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="mounif2012@gmail.com">
                                <span className="clickInput" onClick={() => {
                                    alert('Email copié ! ');
                                }}>
                                    mounif2012@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/mounif-abdoulatif-a44190172/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        
                        <a href="https://github.com/mounifABDlatif" target="_blank" rel="noopener noreferrer" >
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;