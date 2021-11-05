import { useEffect, useState } from "react";

import Image_1 from "../../assets/images/Image_1.jpg";
import Image_2 from "../../assets/images/Image_2.jpg";
import Image_3 from "../../assets/images/Image_3.jpg";

import styles from "../styles/components/SlideShow.module.scss";

function SlideShow() {
    var controller: number = 0;
    const images = [Image_1, Image_2, Image_3];
    const [imageShowed, setImageShowed] = useState(images[controller]);

    useEffect(() => {
        carousel();
        // eslint-disable-next-line
    }, []);

    function carousel() {
        if (controller < 2) {
            controller++;
        } else {
            controller = 0;
        }

        setImageShowed(images[controller]);

        setTimeout(() => {
            carousel();
        }, 4000);
    }

    return (
        <div className={styles.container}>
            <img src={imageShowed} alt="" />
        </div>
    );
}

export default SlideShow;
