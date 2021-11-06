import styles from "../styles/components/MemberCard.module.scss";

interface MemberCardProps {
    name: string;
    src: string;
    alt: string;
}

function MemberCard({ name, src, alt }: MemberCardProps) {
    return (
        <div className={styles.container}>
            <span>{name}</span>
            <img src={src} alt={alt} />
        </div>
    );
}

export default MemberCard;
