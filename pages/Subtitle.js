import styles from './Subtitle.module.css';

const Subtitle = ({ children }) =>
  (
    <h2 className={styles.text}>{children}</h2>
  );

export default Subtitle;
