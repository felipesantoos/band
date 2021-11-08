import Image_4 from "../../assets/images/Image_4.jpg";
import Image_5 from "../../assets/images/Image_5.jpg";
import Image_6 from "../../assets/images/Image_6.jpg";

import styles from "../styles/components/Describe.module.scss";
import MemberCard from "./MemberCard";

function Describe() {
    return (
        <div className={styles.container} id="band">
            <h3>THE BAND</h3>
            <span>We love music</span>
            <p>
                We have created a fictional band website. Lorem ipsum dolor sit 
                amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.
            </p>
            <div className={styles.membersGroup}>
                <MemberCard
                    name="Jimi Foreman"
                    imgSrc={Image_4}
                    imgAlt="Jimi Foreman photo"
                />
                <MemberCard
                    name="Yasin Moran"
                    imgSrc={Image_5}
                    imgAlt="Yasin Moran photo"
                />
                <MemberCard
                    name="Neha Dupont"
                    imgSrc={Image_6}
                    imgAlt="Neha Dupont photo"
                />
            </div>
        </div>
    );
}

export default Describe;
