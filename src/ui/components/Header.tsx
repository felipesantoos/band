import { FaSearch } from "react-icons/fa";

import styles from "../styles/components/Header.module.scss";

function Header() {
    function moreOnMouseEnter() {
        const moreOptions = document.getElementById("moreOptions") as HTMLElement;
        if (moreOptions) {
            moreOptions.style.display = "block";
        }
    }

    function moreOnMouseLeave() {
        const moreOptions = document.getElementById("moreOptions") as HTMLElement;
        if (moreOptions) {
            moreOptions.style.display = "none";
        }
    }

    return (
        <header className={styles.container}>
            <ul>
                <li>Home</li>
                <li>Band</li>
                <li>Tuor</li>
                <li>Contact</li>
                <li 
                    onMouseEnter={() => moreOnMouseEnter()} 
                    onMouseLeave={() => moreOnMouseLeave()}
                >
                    <span>More</span>
                    <div id="moreOptions" className={styles.moreOptions}>
                        <ul>
                            <li>Merchandise</li>
                            <li>Extra</li>
                            <li>Media</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <button>
                <FaSearch />
            </button>
        </header>
    );
}

export default Header;
