import { useEffect, useState } from "react";

import Image_1 from "../../assets/images/Image_1.jpg";
import Image_2 from "../../assets/images/Image_2.jpg";
import Image_3 from "../../assets/images/Image_3.jpg";

import styles from "../styles/components/SlideShow.module.scss";

function SlideShow() {
    var controller: number = 0;
    const images = [Image_1, Image_2, Image_3];
    const [imageShowed, setImageShowed] = useState(images[controller]);
    const titles = ["Los Angeles", "New York", "Chicago"];
    const [titleShowed, setTitleShowed] = useState(titles[controller]);
    const describes = [
        "We had the best time playing at Venice Beach!",
        "The atmosphere in New York is lorem ipsum.",
        "Thank you, Chicago - A night we won't forget.",
    ];
    const [describeShowed, setDescribeShowed] = useState(describes[controller]);

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
        setTitleShowed(titles[controller]);
        setDescribeShowed(describes[controller]);

        setTimeout(() => {
            carousel();
        }, 4000);
    }

    return (
        <div className={styles.container}>
            <img 
                src={imageShowed} 
                alt="Slideshow with images of shows and guitar"
            />
            <h3>{titleShowed}</h3>
            <span>{describeShowed}</span>
        </div>
    );
}

export default SlideShow;
