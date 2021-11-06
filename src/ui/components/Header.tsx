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
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">BAND</a>
                </li>
                <li>
                    <a href="#">TOUR</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
                <li 
                    onMouseEnter={() => moreOnMouseEnter()} 
                    onMouseLeave={() => moreOnMouseLeave()}
                >
                    <span>MORE</span>
                    <div id="moreOptions" className={styles.moreOptions}>
                        <ul>
                            <li>
                                <a href="#">Merchandise</a>
                            </li>
                            <li>
                                <a href="#">Extra</a>
                            </li>
                            <li>
                                <a href="#">Media</a>
                            </li>
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
