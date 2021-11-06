import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import Describe from "../components/Describe";
import TuorDates from "../components/TuorDates";

import styles from "../styles/pages/HomePage.module.scss";
import ContactForm from "../components/ContactForm";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <SlideShow />
            <Describe />
            <TuorDates />
            <ContactForm />
        </div>
    );
}

export default HomePage;
