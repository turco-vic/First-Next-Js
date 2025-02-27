import styles from '../styles/Card.module.css';

export default function Card({content}) {
    return (
        <div className={styles.card}>
            <p>{content}</p>
        </div>
    );
}
