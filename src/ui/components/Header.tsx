import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "../styles/components/Header.module.scss";

function Header() {
    var isOpenMenu: boolean = false;

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

    function showMenu() {
        var menu = document.getElementsByClassName(styles.expanded)[0] as HTMLDivElement;

        if (isOpenMenu) {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }

        isOpenMenu = !isOpenMenu;
    }

    var mql = window.matchMedia("(min-width: 616px)", );

    function screenTest(e: any) {
        var menu = document.getElementsByClassName(styles.expanded)[0] as HTMLDivElement;
        if (e.matches) {
            menu.style.display = "flex";
            isOpenMenu = true;
        } else {
            menu.style.display = "none";
            isOpenMenu = false;
        }
    }

    mql.addEventListener("change", screenTest);

    return (
        <header className={styles.container}>
            <div className={styles.collapsed}>
                <GiHamburgerMenu onClick={() => showMenu()} />
                <button>
                    <FaSearch />
                </button>
            </div>
            <div className={styles.expanded}>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#band">BAND</a></li>
                    <li><a href="#tour">TOUR</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li
                        onMouseEnter={() => moreOnMouseEnter()}
                        onMouseLeave={() => moreOnMouseLeave()}
                    >
                        <span>MORE</span>
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
            </div>
        </header>
    );
}

export default Header;
