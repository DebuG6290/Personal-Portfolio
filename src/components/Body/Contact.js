import React from 'react'
import './Contact.css'
import { FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi';
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'
function Contact() {
    return (
        <section className='contact-section'>
            <div className='contact-main'>
                <div className='contact-main-header'>
                    <div className='contact-main-heading'>
                        <h1 className='contact-main-heading-h1'>Let's Get in Touch</h1>
                    </div>
                    <div className='contact-main-headSub'>
                        Looking to work on an awesome project together or hire me? Or simply have a chat? Either way, lets get in touch!
                    </div>
                </div>
                <div className='contact-main-body'>
                    <div className='contact social'>
                        <div className='social contact-heading'>
                            Socials
                        </div>
                        <div className='social contact-profile'>
                            <a href='https://www.instagram.com/debugi99/' target='blank'><div className='contact-item insta'>
                                <div className='contact-item-logo'><FaInstagram/></div> Instagram
                            </div></a>
                            <a href=' https://wa.me/6290583175' target='blank'><div className='contact-item wp'>
                                <div className='contact-item-logo'><BsWhatsapp/></div>WhatsApp
                            </div></a>
                            <a href='https://t.me/DebuGi6290' target='blank'><div className='contact-item telegram'>
                                <div className='contact-item-logo'><BsTelegram/></div>Telegram
                            </div></a>
                        </div>
                        
                    </div>
                    <div className='contact proff'>
                        <div className='social contact-heading'>
                            Professional
                        </div>
                        <div className='proff contact-profile'>
                        <a href='https://www.linkedin.com/in/devansh-goyal-6b91a514b/' target='blank'><div className='contact-item linkedin'>
                             <div className='contact-item-logo'><FaLinkedinIn/></div>LinkedIn
                        </div></a>
                        <a href='mailto:goyaldevansh19991999@gmail.com' target='blank'><div className='contact-item mail'>
                             <div className='contact-item-logo'><FiMail/></div>Mail
                        </div></a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
