import styles from "../styles/components/Tickets.module.scss";

interface TicketsProps {
    mounth: string;
    quantity: string;
    quantityClass: string;
}

function Tickets({ mounth, quantity, quantityClass }: TicketsProps) {
    return (
        <div className={styles.container}>
            <span>{mounth}</span>
            <span className={styles[quantityClass]}>{quantity}</span>
        </div>
    );
}

export default Tickets;
