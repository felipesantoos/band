import styles from "../styles/components/Tickets.module.scss";

interface TicketsProps {
    mounth: string;
    quantity: string;
    classQuantity: string;
}

function Tickets({ mounth, quantity, classQuantity }: TicketsProps) {
    return (
        <div className={styles.container}>
            <span>{mounth}</span>
            <span className={styles[classQuantity]}>{quantity}</span>
        </div>
    );
}

export default Tickets;
