import styles from "../styles/components/ShowLocation.module.scss";
import Button from "./Button";

interface ShowLocationProps {
    imgSrc: string;
    imgAlt: string;
    local: string;
    date: string;
    describe: string;
}

function ShowLocation({imgSrc, imgAlt, local, date, describe}: ShowLocationProps) {
    return (
        <div className={styles.container}>
            <img src={imgSrc} alt={imgAlt} />
            <div>
                <span className={styles.local}>{local}</span>
                <span className={styles.date}>{date}</span>
                <p>{describe}</p>
                <Button>Buy Tickets</Button>
            </div>
        </div>
    );
}

export default ShowLocation;
