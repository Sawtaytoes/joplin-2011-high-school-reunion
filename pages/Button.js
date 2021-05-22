import styles from './Button.module.css';

const Button = ({ children, ...props }) => (
  <a {...props} className={styles.button}>
    {children}
  </a>
);

export default Button;
