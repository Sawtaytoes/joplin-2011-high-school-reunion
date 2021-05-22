import styles from './Title.module.css';

const Title = ({ children, isMain }) =>
  isMain ? (
    <h1 className={styles.text}>{children}</h1>
  ) : (
    <h2 className={styles.text}>{children}</h2>
  );

export default Title;
