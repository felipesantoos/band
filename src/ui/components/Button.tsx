import { ReactNode } from "react";

import styles from "../styles/components/Button.module.scss";

interface ButtonProps {
    children: ReactNode;
}

function Button({ children }: ButtonProps) {
    return (
        <button className={styles.container}>{children}</button>
    );
}

export default Button;
