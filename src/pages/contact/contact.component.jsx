import "./contact.styles.scss"
import React from 'react';
const contactPage = () => {
    return (
        <div className="contact-component">
            <div className="contact-intro">
                <h1>Contact Us</h1>
                <h3>Have any questions? We'd love to hear from you</h3>
            </div>
            <div className="contact-list">
                <span>
                    <h1>Support</h1>
                    <img className="contact-list-img" src="http://www.pngmart.com/files/7/Support-PNG-Transparent-Picture.png" />
                    <p>Email: support_panda@gmail.com</p>
                    <p>Phone number: 123 456 7890</p>
                </span>
                <span>
                    <h1>Sales</h1>
                    <img className="contact-list-img" src="http://www.pngmart.com/files/7/Support-PNG-Transparent-Image.png" />
                    <p>Email: sale_panda@gmail.com</p>
                    <p>Phone number: 123 456 7890</p>
                </span>
                <span>
                    <h1>Security</h1>
                    <img className="contact-list-img" src="http://www.pngmart.com/files/7/Support-PNG-HD.png" />
                    <p>Email: security_panda@gmail.com</p>
                    <p>Phone number: 123 456 7890</p>
                </span>
            </div>
        </div>
    )
}
export default contactPage