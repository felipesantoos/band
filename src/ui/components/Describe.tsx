import Image_4 from "../../assets/images/Imagem_4.jpg";
import Image_5 from "../../assets/images/Imagem_5.jpg";
import Image_6 from "../../assets/images/Imagem_6.jpg";

import styles from "../styles/components/Describe.module.scss";

function Describe() {
    return (
        <div className={styles.container}>
            <h3>THE BAND</h3>
            <span>We love music</span>
            <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className={styles.membersGroup}>
                <div>
                    <span>Jimi Foreman</span>
                    <img src={Image_4} alt="" />
                </div>
                <div>
                    <span>Yasin Moran</span>
                    <img src={Image_5} alt="" />
                </div>
                <div>
                    <span>Neha Dupont</span>
                    <img src={Image_6} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Describe;
