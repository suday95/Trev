import styles from './FancyButton.module.css';

export default function FancyButton({children}) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}
