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
                        <Card content="Dois hambúrgueres suculentos, queijo derretido, alface crocante, cebola fresca, picles e aquele molho especial que só o McDonald's tem. Tudo isso entre três camadas de pão macio e levemente tostado. O Big Mac não é apenas um sanduíche, é uma experiência que desperta todos os sentidos!"/>
                        <Card content="Cada mordida é uma explosão de sabores e texturas: o suco dos hambúrgueres, o cremoso do queijo, o frescor do alface e o toque único do molho especial. É o equilíbrio perfeito entre tradição e sabor inconfundível."/>
                        <Card content="O Big Mac é mais que um sanduíche: é um símbolo de momentos felizes, de encontros com amigos, de prazeres simples que fazem a vida valer a pena. E aí, vai perder a chance de provar essa delícia?"/>
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