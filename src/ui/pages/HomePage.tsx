import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import Describe from "../components/Describe";
import TuorDates from "../components/TuorDates";
import Image_10 from "../../assets/images/Image_10.jpg";

import styles from "../styles/pages/HomePage.module.scss";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <SlideShow />
            <Describe />
            <TuorDates />
            <ContactForm />
            <img src={Image_10} alt="" />
            <Footer />
        </div>
    );
}

export default HomePage;
