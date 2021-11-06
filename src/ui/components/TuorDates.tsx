import Tickets from "./Tickets";
import Image_7 from "../../assets/images/Image_7.jpg";
import Image_8 from "../../assets/images/Image_8.jpg";
import Image_9 from "../../assets/images/Image_9.jpg";

import styles from "../styles/components/TuorDates.module.scss";
import ShowLocation from "./ShowLocation";

function TuorDates() {
    return (
        <div className={styles.container}>
            <h3>TUOR DATES</h3>
            <span>Remember to book your tickets!</span>
            <div className={styles.ticketsGroup}>
                <Tickets
                    mounth="September"
                    quantity="Sold out"
                    classQuantity="soldOut"
                />
                <Tickets
                    mounth="October"
                    quantity="Sold out"
                    classQuantity="soldOut"
                />
                <Tickets
                    mounth="November"
                    quantity="3"
                    classQuantity="number"
                />
            </div>
            <div className={styles.showLocationGroup}>
                <ShowLocation
                    imgSrc={Image_7}
                    imgAlt=""
                    local="New York"
                    date="Fri 27 Nov 2016"
                    describe="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
                <ShowLocation
                    imgSrc={Image_8}
                    imgAlt=""
                    local="Paris"
                    date="Sat 28 Nov 2016"
                    describe="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
                <ShowLocation
                    imgSrc={Image_9}
                    imgAlt=""
                    local="San Francisco"
                    date="Sat 29 Nov 2016"
                    describe="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
            </div>
        </div>
    );
}

export default TuorDates;
