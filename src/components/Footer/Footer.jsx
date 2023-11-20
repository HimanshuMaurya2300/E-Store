import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import Payment from '../../assets/payments.png'

import "./Footer.scss";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate()



    return (
        <footer className='footer'>
            <div className="footer-content">

                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        At E-store, our mission is to revolutionize the way you shop online. We strive to create an enjoyable, hassle-free, and secure platform where customers can find an extensive selection of products from renowned brands and emerging designers alike. We are dedicated to delivering exceptional customer service and value to every individual, catering to diverse needs and preferences.
                    </div>
                </div>


                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            C-555/5 Near diplai building opposite of Asus store, Nehru place, New Delhi-110024
                        </div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 1234567890
                        </div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: e-store@gmail.com
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={() => navigate('/category/1')}>Asus</span>
                    <span className="text" onClick={() => navigate('/category/2')}>Lenovo</span>
                    <span className="text" onClick={() => navigate('/category/3')}>Hp</span>
                    <span className="text" onClick={() => navigate('/category/4')}>Dell</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>


            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    ©️ E-STORE 2023 Created by HIMANSHU

                    <img src={Payment} alt='payment' />
                </div>
            </div>

        </footer>
    )
};

export default Footer;
