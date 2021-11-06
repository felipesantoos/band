import styles from "../styles/components/ShowLocation.module.scss";

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
                <button>Buy Tickets</button>
            </div>
        </div>
    );
}

export default ShowLocation;
