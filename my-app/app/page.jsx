import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.block}>
                    <article className={styles.article}>
                        <Card />
                        <Card />
                        <Card />
                    </article>
                    <div className={styles.aside}>
                        <h2 className={styles.subtitle}>Big Mac</h2>
                        <img className={styles.imagebigmac}  src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br"/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}