import styles from "../styles/components/MemberCard.module.scss";

interface MemberCardProps {
    name: string;
    imgSrc: string;
    imgAlt: string;
}

function MemberCard({ name, imgSrc, imgAlt }: MemberCardProps) {
    return (
        <div className={styles.container}>
            <span>{name}</span>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}

export default MemberCard;
