import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import styles from "../styles/components/ContactForm.module.scss";
import Button from "./Button";
import Input from "./Input";

function ContactForm() {
    return (
        <div className={styles.container}>
            <h3>CONTACT</h3>
            <span>Fan? Drop a note!</span>
            <div className={styles.contactGroup}>
                <div className={styles.contactInfo}>
                    <div>
                        <MdLocationPin />
                        <span>Chicago, US</span>
                    </div>
                    <div>
                        <FaPhoneAlt />
                        <span>Phone: +00 151515</span>
                    </div>
                    <div>
                        <FaEnvelope />
                        <span>Email: mail@mail.com</span>
                    </div>
                </div>
                <div className={styles.contactForm}>
                    <form>
                        <div>
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="E-mail" />
                        </div>
                        <Input type="text" placeholder="Message" />
                        <Button>SEND</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
