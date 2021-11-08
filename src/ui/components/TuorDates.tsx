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
                    quantityClass="soldOut"
                />
                <Tickets
                    mounth="October"
                    quantity="Sold out"
                    quantityClass="soldOut"
                />
                <Tickets
                    mounth="November"
                    quantity="3"
                    quantityClass="number"
                />
            </div>
            <div className={styles.showLocationGroup} id="tour">
                <ShowLocation
                    imgSrc={Image_7}
                    imgAlt="New York photo"
                    local="New York"
                    date="Fri 27 Nov 2016"
                    describe="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
                <ShowLocation
                    imgSrc={Image_8}
                    imgAlt="Paris photo"
                    local="Paris"
                    date="Sat 28 Nov 2016"
                    describe="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
                <ShowLocation
                    imgSrc={Image_9}
                    imgAlt="San Francisco photo"
                    local="San Francisco"
                    date="Sat 29 Nov 2016"
                    describe="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
            </div>
        </div>
    );
}

export default TuorDates;
