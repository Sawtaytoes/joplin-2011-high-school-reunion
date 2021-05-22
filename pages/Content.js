import styles from './Content.module.css';

const Content = ({ children }) => <p className={styles.text}>{children}</p>;

export default Content;
