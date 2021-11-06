import styles from "../styles/components/Input.module.scss";

interface InputProps {
    type: string;
    placeholder: string;
}

function Input({ type, placeholder }: InputProps) {
    return (
        <input 
            className={styles.container} 
            type={type} 
            placeholder={placeholder}
        />
    );
}

export default Input;
