import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import styles from "../styles/components/Footer.module.scss";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.iconsGroup}>
                <AiFillFacebook />
                <AiOutlineInstagram />
                <FaSnapchat />
                <FaPinterestP />
                <AiOutlineTwitter />
                <AiFillLinkedin />
            </div>
            <span>Powered by <a href="#">felipesantosds</a></span>
        </div>
    );
}

export default Footer;
