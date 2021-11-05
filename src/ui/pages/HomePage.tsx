import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import Describe from "../components/Describe";

import styles from "../styles/pages/HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <SlideShow />
            <Describe />
        </div>
    );
}

export default HomePage;
