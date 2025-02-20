import styles from '../styles/Card.module.css';

export default function Card() {
    return (
        <div className={styles.card}>
            <h4 className={styles.description}>Big Mac</h4>
        </div>
    );
}
