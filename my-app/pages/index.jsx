import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.sobrebigmac}>
                    <h2 className={styles.subtitle}>Big Mac: A Lenda que Conquistou o Mundo!</h2>
                    <p className={styles.description}>
                    Dois hambúrgueres suculentos, queijo derretido, alface crocante, cebola fresca, picles e aquele molho especial que só o McDonald's tem. Tudo isso entre três camadas de pão macio e levemente tostado. O Big Mac não é apenas um sanduíche, é uma experiência que desperta todos os sentidos!
                    </p>
                    <img className={styles.imagebigmac} src="/images/bigmac.png"></img>
                </div>
            </main>
            <Footer />
        </div>
    );
}